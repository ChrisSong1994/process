module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
    "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
    "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
