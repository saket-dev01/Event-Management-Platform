import prisma from "@/prisma";

export async function fetch(){
    const res = await prisma.user.create({
        data:{
            name:"saket",
            password:"saket1234",
            email:"saket@gmail.com"
        }
    })
    console.log(res); // this works
}