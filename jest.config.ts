import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': ['ts-jest', { tsconfig: './tsconfig.app.json' }], // Gunakan ts-jest untuk TypeScript
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json', // Pastikan ts-jest menggunakan tsconfig.app.json
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock file CSS
    '\\.(svg|png|jpg|jpeg|gif)$': 'jest-transform-stub', // Mock file gambar
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/src/**/*.test.tsx', '**/src/**/*.test.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
};

export default config;
