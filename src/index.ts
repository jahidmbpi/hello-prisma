import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // create data in a table
  // const result = await prisma.user.create({
  //   data: {
  //     name: "jahankar mahbub",
  //     email: "jahid.redmi10@gmail.com",
  //     profilePhoto: "https://programming_hero.png",
  //   },
  // });
  // console.log(result);
  // find add data fromtable
  // const userdata = await prisma.user.findMany();
  //find data using id
  // const userdata = await prisma.user.findMany({
  //   where: {
  //     id: 1,
  //   },
  // });
  // get single data in object
  // const findUser = await prisma.user.findUnique({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log(findUser);

  const update = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "mejba",
      email: "mejaba@gmail.com",
    },
  });
  console.log(update);
}

main();
