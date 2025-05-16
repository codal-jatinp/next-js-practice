import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

async function main() {
  await prisma.trainings.createMany({
    data: [
      {
        title: "Yoga",
        image: "/yoga.jpg",
        description: "A gentle way to improve flexibility and balance.",
      },
      {
        title: "Boxing",
        image: "/boxing.jpg",
        description: "A high-energy workout that improves strength and speed.",
      },
      {
        title: "Running",
        image: "/running.jpg",
        description:
          "A great way to improve cardiovascular health and endurance.",
      },
      {
        title: "Weightlifting",
        image: "/weightlifting.jpg",
        description: "A strength-building workout that helps tone muscles.",
      },
      {
        title: "Cycling",
        image: "/cycling.jpg",
        description:
          "A low-impact workout that improves cardiovascular health and endurance.",
      },
      {
        title: "Gaming",
        image: "/gaming.jpg",
        description: "A fun way to improve hand-eye coordination and reflexes.",
      },
      {
        title: "Sailing",
        image: "/sailing.jpg",
        description:
          "A relaxing way to enjoy the outdoors and improve balance.",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
