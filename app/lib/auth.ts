import prisma from "@/prisma";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google";

// interface Credentials {
//     csrfToken: string
//     email: string
//     password: string
// }

// interface User {
//     id: string;
//     name: string | null;
//     email: string;
// }

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "john@doe.com", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            // TODO: User credentials type from next-auth
            async authorize(credentials: any) {
                // Do zod validation, OTP validation here
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });

                if (existingUser && existingUser.password) {

                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            email: credentials.email,
                            password: hashedPassword,
                            auth_type: "Email"
                        }
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } catch (e) {
                    console.error(e);
                }

                return null
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

        }),
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub;

            return session;
        },

        async signIn({ account, profile }: any) {

            if (account.provider == "google") {
                try {
                  const existingUser = await prisma.user.findUnique({
                    where: {
                      email: profile.email,
                    },
                  });

                  if (existingUser) {
                    return true;
                  }

                  const newUser = await prisma.user.create({
                    data: {
                      email: profile.email,
                      name: profile.name,
                      image: profile.picture,
                      auth_type: "Google", // Set the auth_type to 'GOOGLE'
                    },
                  });

                  return true;
                } catch (error) {
                  console.error("Error creating user:", error);
                  return false;
                }
            }


            return true;
        },
    }
}
