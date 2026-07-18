import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
  '^.+\\.tsx?$': ['ts-jest', { 
    tsconfig: {
      module: 'commonjs',
      verbatimModuleSyntax: false,
      "jsx": "react-jsx"
    }
  }]
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;