/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: ['@react-native-community', '@useless-developers'],
  ignorePatterns: ['build'],
  plugins: ['react-native'],
}
