import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Crear un juego
  const post1 = await prisma.game.create({
    data: {
      title: "The Legend of Zelda: Breath of the Wild", // Nombre del juego
      genre: "Action-Adventure", // Género del juego
      platform: "Nintendo Switch", // Plataforma
    },
  });

  // Imprimir el juego creado en la consola
  console.log("Juego creado:", post1);

  // Si quieres crear más juegos, puedes seguir el mismo proceso
  const post2 = await prisma.game.create({
    data: {
      title: "God of War",
      genre: "Action-Adventure",
      platform: "PlayStation 4",
    },
  });

  console.log("Juego creado:", post2);

  // También puedes hacer lo mismo con más juegos si lo deseas
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
