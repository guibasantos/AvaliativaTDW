module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true // Adicione esta linha
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended' // Adicione esta linha se estiver usando o plugin jest
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // suas regras personalizadas
  }
}
