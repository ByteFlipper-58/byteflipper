// ./vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap'; // Импортируем плагин
import { BASE_URL } from './src/config.constants.js'; // Импортируем базовый URL

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    Sitemap({
      hostname: BASE_URL, // Используем базовый URL из констант
      // Можно добавить динамические маршруты вручную, если нужно
      // dynamicRoutes: ['/posts/1', '/posts/2'],
      // Исключить маршруты
      exclude: ['/404'],
      // Настройки для генерации файла
      // outDir: 'dist', // Папка вывода (по умолчанию 'dist')
      // filename: 'sitemap.xml', // Имя файла (по умолчанию 'sitemap.xml')
      // changefreq: 'weekly',
      // priority: 0.7,
      // lastmod: new Date(),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
