import { defineConfig } from 'cypress'

export default defineConfig({
    defaultCommandTimeout: 20000, // 20s
    e2e: {
        baseUrl: "http://localhost:3000",
        specPattern: "cypress/integration/**/*.spec.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/index.ts",
        viewportHeight: 1000,
        viewportWidth: 1280,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
        },
    },
    video: false,
})