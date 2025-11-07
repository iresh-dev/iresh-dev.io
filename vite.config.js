  import { defineConfig } from "vite";
  import stringPlugin from "vite-plugin-string";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    base: "/iresh-dev.github.io/",
    plugins: [stringPlugin(), react()],
    assetsInclude: ["**/*.glb"],
    base: "/",
  });
