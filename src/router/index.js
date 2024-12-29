// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ffsettings',
    name: 'FFSettings',
    component: () => import('@/views/FFSettings.vue'),
    /*meta: {
        title: 'description',
        metaTags: [
          { property: 'og:title', content: 'Главная страница' },
          { property: 'og:description', content: 'Описание главной страницы' },
          { property: 'og:image', content: 'https://example.com/home.jpg' },
          { name: 'twitter:title', content: 'Главная страница' },
          { name: 'twitter:description', content: 'Описание главной страницы' },
          { name: 'twitter:image', content: 'https://example.com/home.jpg' }
        ],
      }*/
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/ffsettings-privacy-policy',
    name: 'FFSettingsPrivacyPolicy',
    component: () => import('@/views/FFSettingsPrivacyPolicy.vue'),
  },
  {
    path: '/ffsettings-terms-conditions',
    name: 'FFSettingsTermsConditions',
    component: () => import('@/views/FFSettingsTermsConditions.vue'),
  },
  {
    path: '/everbook',
    name: 'Everbook',
    component: () => import('@/views/Everbook.vue'),
  },
  {
    path: '/everbook-privacy-policy',
    name: 'EverBookPrivacyPolicy',
    component: () => import('@/views/EverBookPrivacyPolicy.vue'),
  },
  {
    path: '/everbook-terms-conditions',
    name: 'EverBookTermsConditions',
    component: () => import('@/views/EverBookTermsConditions.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
  { path: "/app-ads.txt"},
  { path: "/sitemap.xml"},
  { path: "/robots.txt"}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;