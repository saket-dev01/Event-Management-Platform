"use client"

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div>
      Welcome {session.data?.user ? session.data?.user.name : "User!"}
    </div>
  );
}
