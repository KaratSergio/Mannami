import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@shared': '/src/shared',
      '@features': '/src/features',
      '@entities': '/src/entities',
      '@widgets': '/src/widgets',
      '@pages': '/src/pages',
      '@components': '/src/shared/components',
      '@hooks': '/src/shared/hooks',
      '@types': '/src/shared/types',
      '@utils': '/src/shared/utils',
      '@assets': '/src/assets',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  base: '/mannami/',
});
