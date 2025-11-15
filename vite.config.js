import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.js",
            name: "NeonAlerts",
            fileName: (format) => `neon-alerts.${format}.js`
        },
        rollupOptions: {
            output: {
                assetFileNames: "neon-alerts.css"
            }
        }
    }
});
