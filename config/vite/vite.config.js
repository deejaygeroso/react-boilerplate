import react from '@vitejs/plugin-react'

import path from 'path'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

/* ---------------------------------------------------------------------
 * SHARED OPTIONS / PLUGINS: https://vitejs.dev/guide/api-plugin.html
 * ---------------------------------------------------------------------
 * Array of plugins to use.
 * Falsy plugins are ignored and arrays of plugins are flattened.
 * If a promise is returned, it would be resolved before running.
 */
const plugins = [
  react({
    // Use React plugin in all *.jsx and *.tsx files
    include: '**/*.{jsx,tsx}',
  }),
  viteTsConfigPaths({
    // The directory to search for tsconfig.json files
    root: path.resolve(__dirname, '../../'),
  }),
]

/* ---------------------------------------------------------------------
 * SHARED OPTIONS: https://vitejs.dev/config/shared-options.html
 * --------------------------------------------------------------------- */
const shared = {
  // Base public path when served in development or production.
  base: '/',

  /* Directory to save cache files.
   * Files in this directory are pre-bundled deps or some other cache files generated by vite,
   * which can improve the performance. You can use --force flag or manually delete the directory to regenerate the cache files.
   * The value can be either an absolute file system path or a path relative to project root.
   * @Default: "node_modules/.vite"
   */
  cacheDir: 'node_modules/.vite',

  // Define global constant replacements.
  define: {
    'process.env': {},
  },

  /* Specifying this in config will override the default mode for both serve and build.
   * This value can also be overridden via the command line --mode option.
   * @Default: 'development' for serve, 'production' for build.
   */
  // mode: 'development',

  plugins,

  /* Directory to serve as plain static assets.
   * Files in this directory are served at '/' during dev and copied to the root of outDir during build,
   * and are always served or copied as-is without transform.
   * The value can be either an absolute file system path or a path relative to project root.
   * Defining publicDir as false disables this feature.
   */
  publicDir: path.resolve(__dirname, '../../public'),

  // resolve: {
  //   // Will be passed to @rollup/plugin-alias as its entries option.
  //   alias: {
  //     '@': path.resolve(__dirname, '../../src'),
  //   },
  // },

  // Project root directory (where index.html is located)
  root: path.resolve(__dirname, '../../src'),
}

/* ---------------------------------------------------------------------
 * BUILD OPTIONS: https://vitejs.dev/config/build-options.html
 * --------------------------------------------------------------------- */
const build = {
  // Specify the output directory
  outDir: path.resolve(__dirname, '../../dist'),
}

/* ---------------------------------------------------------------------
 * SERVER OPTIONS: https://vitejs.dev/config/server-options.html
 * --------------------------------------------------------------------- */
const server = {
  /* Specify which IP addresses the server should listen on.
   * Set this to 0.0.0.0 or true to listen on all addresses, including LAN and public addresses.
   * @Default: 'localhost'
   */
  host: 'localhost',
  /* Specify server port.
   * Note if the port is already being used, Vite will automatically try the next available port
   * so this may not be the actual port the server ends up listening on.
   * @Default: 5173
   */
  port: 3000,
}

/* ---------------------------------------------------------------------
 * PREVIEW OPTIONS: https://vitejs.dev/config/preview-options.html
 * --------------------------------------------------------------------- */
const preview = {
  /* Specify server port. Note if the port is already being used,
   * Vite will automatically try the next available port so this may not be
   * the actual port the server ends up listening on.
   */
  port: 4000,
}

export default defineConfig(() => {
  return {
    ...shared,
    build,
    preview,
    server,
  }
})
