module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "**/test/*.test.ts"
  ],
  "preset": "ts-jest"
}
