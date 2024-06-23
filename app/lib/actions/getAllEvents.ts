import prisma from "@/prisma";
export async function getAllEvents(){
    const events = await prisma.event.findMany();

    return events;
}