import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

export default [
  {
    input: './src/OpenAPI.ts',
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" }
    ],
    plugins: [typescript()],
  },
];
