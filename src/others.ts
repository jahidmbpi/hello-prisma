import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: "jahid",
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

others();
