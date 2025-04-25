import { defineConfig } from "tsup"

export default defineConfig({
    format: ["esm"],
    entry: ["./src/index.ts"],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    minify: true,
    clean: true,
})
