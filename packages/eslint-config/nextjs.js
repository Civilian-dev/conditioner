/** @type {import('eslint').Linter.BaseConfig } */
module.exports = {
  extends: [
    'standard',
    'next',
    'turbo'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off'
  }
}
