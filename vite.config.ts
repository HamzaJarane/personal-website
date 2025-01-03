import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
      },
    }),
    // VitePWA({ 
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,pdf,json}'],
    //     maximumFileSizeToCacheInBytes: 5000000, // 5mb
    //     cleanupOutdatedCaches: true,
    //   },      
    //   manifest: {
    //     name: 'Hamza Jarane - Portfolio',
    //     short_name: 'HamzaJarane',
    //     description: 'My personal portfolio',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'icon.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   },
    // }),
  ],
})