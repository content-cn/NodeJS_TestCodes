export default {
  clearMocks: true,
  setupFilesAfterEnv: ["regenerator-runtime/runtime"],
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  transform: { "^.+\\.m?js$": "babel-jest" },
};
