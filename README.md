# @winnerpc/prettier-config

A shareable Prettier configuration.

This package provides a consistent Prettier configuration that can be easily shared across multiple projects.

---

## 📦 Installation

> [!IMPORTANT]
> Prettier version `3.5.0` or higher is required as a peer dependency. Please ensure it is installed in your project's `devDependencies`.

```bash
npm install --save-dev --save-exact @winnerpc/prettier-config prettier
```

```bash
yarn add --dev --exact @winnerpc/prettier-config prettier
```

```bash
pnpm add --save-dev --save-exact @winnerpc/prettier-config prettier
```

---

## 🚀 Usage

### 🔧 Basic Usage

To use the shared configuration, add the following to your `.prettierrc` file in your project's root directory:

```json
"@winnerpc/prettier-config"
```

This will apply the [default configuration](#-default-configuration) defined in this package to your project.

#### 📁 Recommended Project Structure

Here’s a simple example of how your project structure might look:

```
my-project/
├── node_modules/
├── src/
│   └── index.js
├── .prettierrc     # Paste "@winnerpc/prettier-config" here 👈
└── package.json
```

#### 🧩 Default Configuration

The default configuration provided by `@winnerpc/prettier-config` is as follows:

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": false,
    "quoteProps": "consistent",
    "jsxSingleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "objectWrap": "preserve",
    "bracketSameLine": false,
    "arrowParens": "avoid",
    "endOfLine": "lf",
    "embeddedLanguageFormatting": "off",
    "singleAttributePerLine": false
}
```

These settings promote a clean and consistent code style across your codebase.

### 🛠️ Extending the Configuration

If you want to customize or override the default settings, you can create a `prettier.config.js`, `.prettierrc.js`, `prettier.config.mjs`, or `.prettierrc.mjs` file in your project's root directory.

Example of extending the config:

```js
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

import winnerpcPrettierConfig from "@winnerpc/prettier-config"

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    ...winnerpcPrettierConfig,
    semi: true, // Override the 'semi' rule
    // Customize other Prettier options as needed
}

export default config
```

In this example, we import the shared configuration and then override the `semi` option to `true`. You can add or override any other Prettier [options](https://prettier.io/docs/options) as needed.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas, improvements, or run into any issues, feel free to open an [issue](https://github.com/Winner-pc/prettier-config/issues).

---

## 🔗 Links

- [npm](https://www.npmjs.com/package/@winnerpc/prettier-config)
- [GitHub](https://github.com/Winner-pc/prettier-config)

---

## 📃 License

MIT © [Winner-pc](https://github.com/Winner-pc)
