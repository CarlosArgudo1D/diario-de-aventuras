import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const post1 = await prisma.game.create({
    data: {
      name: "The Legend of Zelda: Breath of the Wild", 
      genre: "Action-Adventure", 
      platform: "Nintendo Switch", 
      rating: 4.9
    },
  });

  const post2 = await prisma.game.create({
    data: {
      name: "God of War",
      genre: "Action-Adventure",
      platform: "PlayStation 4",
      rating: 4.8
    },
  });

  const post3 = await prisma.game.create({
    data: {
      name: "Minecraft",
      genre: "Sandbox",
      platform: "Multiplataforma",
      rating: 4.7
    },
  });

  const post4 = await prisma.game.create({
    data: {
      name: "Super Mario Bros",
      genre: "Action-Adventure",
      platform: "Nintendo (NES) ",
      rating: 5.4
    },
  });

  console.log(post1, post2, post3, post4);
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})

.finally(async () => {
    await prisma.$disconnect;
});
