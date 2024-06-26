const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

const paths = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' })

module.exports = {
  "preset": 'ts-jest',
  "moduleDirectories": [
    "node_modules",
    "<rootDir>/src/lib"
  ],
  "modulePathIgnorePatterns": [
    "<rootDir>/src/app/"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/src/helpers/enzyme_setup"
  ],
  "transform": {
    "^.+\\.(j|t)sx?$": "ts-jest"
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tools/assetsTransformer.js",
    "\\.(scss|css|less)$": "<rootDir>/tools/assetsTransformer.js",
    ...paths
  }
};
