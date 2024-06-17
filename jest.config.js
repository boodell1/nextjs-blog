const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // 'absolute-path': 'relative-path'
    'jsroot/io': '<src>/node_modules/jsroot/',
    'components/BlogCard.js': '/Users/austenboodell/Desktop/onboarding/nextjs-blog/components/BlogCard.js',
    'components/NavBar.js': '/Users/austenboodell/Desktop/onboarding/nextjs-blog/components/NavBar.js'
}
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)