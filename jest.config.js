// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // Preset khusus untuk menangani TypeScript + ESM
  preset: "ts-jest/presets/default-esm",

  testEnvironment: "node",

  // Memberitahu Jest bahwa file .ts harus diperlakukan sebagai ESM
  extensionsToTreatAsEsm: [".ts"],

  moduleNameMapper: {
    // Membantu Jest mengenali import dengan ekstensi .js (wajib di ESM native)
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  verbose: true,
  transform: {
    // Konfigurasi spesifik ts-jest untuk menggunakan ESM
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};
