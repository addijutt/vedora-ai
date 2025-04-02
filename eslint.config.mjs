import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Optional: Downgrade error to warning
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            "null": "Allowing `null` as a valid type",
          },
          extendDefaults: true,
        },
      ],
    },
  },
];

export default eslintConfig;
