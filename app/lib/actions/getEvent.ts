import prisma from "@/prisma";

export async function getEvent(id: string) {
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return event;
}
