import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "jahankar mahbub",
  //     email: "jahid.redmi10@gmail.com",
  //     profilePhoto: "https://programming_hero.png",
  //   },
  // });
  // console.log(result);

  // const userdata = await prisma.user.findMany({
  //   where: {
  //     id: 1,
  //   },
  // });

  const findUser = await prisma.user.findUnique({
    where: {
      id: 2,
    },
  });
  console.log(findUser);
}

main();
