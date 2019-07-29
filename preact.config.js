// Packages
import envVars from 'preact-cli-plugin-env-vars'
import path from 'path'

// Config
import * as config from './config.json'

/**
 * @file Preact configuration
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const { babel, template } = config

/**
 * Function that mutates the original webpack config.
 * Supports asynchronous changes when a promise is returned (or it's an async
 * function).
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to the CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers for
 * working with the webpack config.
 */
export default function (config, env, helpers) {
  // Initialize environment variables for the application
  // Application environment variables are prefixed with PREACT_APP_
  envVars(config, env, helpers)

  // Update public path based on Node environment
  config.output.publicPath = config.public

  // Change hosting directory
  if (env.development) config.output.path = path.resolve(__dirname, 'public')

  // Update Babel configuration
  const { rule } = helpers.getLoadersByName(config, 'babel-loader')[0]

  const { plugins, presets } = babel

  plugins.forEach(plugin => rule.options.plugins.push(plugin))
  presets.forEach(preset => rule.options.presets.push(preset))

  // Set HTML template and options based on Node environment
  const html = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {}

  if (html && html.plugin) {
    html.plugin.options.publicPath = config.public
  }

  helpers.setHtmlTemplate(config, template)
}
