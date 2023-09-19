/** @type {import("@babel/core").ConfigFunction} */
module.exports = function(api) {
  api.cache.forever()

  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: { '@': './src' },
          extensions: ['.ts', '.tsx'],
          root: ['./src'],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  }
}
