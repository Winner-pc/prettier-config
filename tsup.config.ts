import { defineConfig } from "tsup"

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/index.ts"],
    legacyOutput: true,
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
})
