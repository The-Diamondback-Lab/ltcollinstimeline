/**
 * @file Project Wide Babel Configuration
 * @see {@link https://babeljs.io/docs/en/config-files}
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

module.exports = api => {
  api.cache(true)

  return {
    ignore: [
      '**/node_modules/**',
      './build/*',
      './design/*',
      './src/assets/*'
    ],
    presets: [
      [
        'preact-cli/babel',
        {
          modules: 'commonjs'
        }
      ]
    ]
  }
}
