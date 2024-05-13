import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { ViteFaviconsPlugin } from 'vite-plugin-favicon'

export default defineConfig({
  plugins: [react(), ViteFaviconsPlugin('src/assets/favicon/favicon.svg')],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
