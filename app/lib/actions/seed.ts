import prisma from "@/prisma";
import bcrypt from "bcrypt";

export async function seed() {
  // Hash the passwords
  const hashedPassword1 = await bcrypt.hash("password123", 10);
  const hashedPassword2 = await bcrypt.hash("password123", 10);

  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      password: hashedPassword1,
      image: 'https://picsum.photos/200',
      auth_type: 'Email',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      password: hashedPassword2,
      image: 'https://picsum.photos/200',
      auth_type: 'Email',
    },
  });

  // Create Events
  const event1 = await prisma.event.create({
    data: {
      name: 'Music Concert',
      date: new Date('2024-07-01T19:00:00Z'),
      location: 'Central Park',
      image: 'https://picsum.photos/200',
      description: 'A great music concert featuring various artists.',
      user: { connect: { id: user1.id } },
      price: 26
    },
  });

  const event2 = await prisma.event.create({
    data: {
      name: 'Art Exhibition',
      date: new Date('2024-07-15T09:00:00Z'),
      location: 'Art Gallery',
      image: 'https://picsum.photos/200',
      description: 'An exhibition showcasing modern art.',
      user: { connect: { id: user2.id } },
      price: 28
    },
  });

  // Create RSVPs
  await prisma.rsvp.create({
    data: {
      user: { connect: { id: user1.id } },
      event: { connect: { id: event2.id } },
    },
  });

  await prisma.rsvp.create({
    data: {
      user: { connect: { id: user2.id } },
      event: { connect: { id: event1.id } },
    },
  });

  console.log('Database seeded successfully');
}