import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [tailwindcss(), react(), flowbiteReact()],
 base: "/Quiz_React/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
