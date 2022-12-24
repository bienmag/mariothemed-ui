import babel from "esbuild-plugin-babel";
import { defineConfig } from "tsup";

export default defineConfig({
  name: "tsup",
  target: "node14",
  dts: {
    resolve: true,
    // build types for `src/index.ts` only
    // otherwise `Options` will not be exported by `tsup`, not sure how this happens, probably a bug in rollup-plugin-dts
    entry: "./index.ts",
  },
  entryPoints: ["./index.ts"],
  format: ["cjs", "esm"],
  esbuildPlugins: [babel()],
});
