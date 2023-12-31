module.exports = {
    roots: ["<rootDir>"],
    transform: {
      "^.+\\.tsx?$": "babel-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
  