/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
    test: {
        environment: 'node',
        include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
        exclude: ['tests/**', 'node_modules/**', 'dist/**'],
    },
});