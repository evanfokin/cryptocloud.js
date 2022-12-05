import type { Config } from 'jest'
import { config as importEnv } from 'dotenv'

importEnv()

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
}

export default config
