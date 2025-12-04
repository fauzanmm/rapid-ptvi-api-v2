// export const dataConverter = <T extends Record<string, any>>(
//   data: T[]
// ): T[] => {
//   const normalized = data.map((row) => {
//     const newRow: Record<string, any> = {};

//     for (const key in row) {
//       const value = row[key];

//       if (value === null || value === undefined) {
//         newRow[key] = value;
//       } else if (typeof value === "bigint") {
//         newRow[key] = Number(value);
//       } else if ((value as any) instanceof Date) {
//         newRow[key] = value.toISOString();
//       } else {
//         newRow[key] = value;
//       }
//     }

//     return newRow as T;
//   });

//   normalized.sort((a, b) => {
//     const aEquip = a["Equipment"];
//     const bEquip = b["Equipment"];

//     if (!aEquip) return -1;
//     if (!bEquip) return 1;

//     return String(aEquip).localeCompare(String(bEquip));
//   });

//   return normalized;
// };

// export const dataConverter = async (data: json) => {};
