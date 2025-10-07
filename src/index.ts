import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // create data in a table
  const result = await prisma.user.create({
    data: {
      name: "jahankar mahbub",
      email: "jahid.redmi10@gmail.com",
      profilePhoto: "https://programming_hero.png",
    },
  });
  console.log(result);
  // find  data fromtable
  const userdata = await prisma.user.findMany();
  console.log(userdata);
  // find data using id
  const userdat = await prisma.user.findMany({
    where: {
      id: 1,
    },
  });
  // get single data in object
  const findUser = await prisma.user.findUnique({
    where: {
      id: 2,
    },
  });
  console.log(findUser);
  // update
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
  // update manay data
  const updatemany = await prisma.user.updateMany({
    where: {
      id: {
        gt: 2,
      },
    },
    data: {
      profilePhoto: "https://thisisprofile.png",
    },
  });
  console.log(updatemany);
  // updatemanyAnd retrun
  const updateAndRetrun = await prisma.user.updateManyAndReturn({
    where: {
      id: {
        gte: 2,
      },
    },
    data: {
      profilePhoto: "https://thisisprofile.png",
    },
  });
  console.log(updateAndRetrun);
  // delete data
  const deleteData = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  console.log(deleteData);
}

main();
