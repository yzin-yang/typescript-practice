module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname
    },
    plugins: ["@typescript-eslint"],
    rules: {
        quotes: ["error", "single"]
    }
};