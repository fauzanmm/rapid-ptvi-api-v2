import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";

export const pitFuelTimeLossCurrent = async () => {
  try {
    const data = await prismaMainMinecare.pitFuelTimeLossCurrent.findFirst();
    console.log(data);

    return data;
  } finally {
    prismaMainMinecare.$disconnect();
  }
};

export const pitFuelTimeLossShift = async () => {
  try {
    const data = await prismaMainMinecare.pitFuelTimeLossShift.findFirst();
    console.log(data);

    return data;
  } finally {
    prismaMainMinecare.$disconnect();
  }
};

export const summaryFuelTimeLossShift = async () => {
  try {
    const lossHour = await prismaMainMinecare.pitFuelTimeLossShift.count({});
    const lossFuel = await prismaMainMinecare.pitFuelTimeLossShift.aggregate({
      _sum: {
        FuelLoss: true,
      },
    });

    const data = {
      lossHour: lossHour || 0,
      lossFuel: lossFuel._sum.FuelLoss || 0,
    };
    console.log(data);

    return data;
  } finally {
    prismaMainMinecare.$disconnect();
  }
};
