import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import { analytics } from './firebase';
import '@/assets/main.css';

const app = createApp(App);

app.config.globalProperties.$analytics = analytics;
app.use(router);
app.use(i18n);

app.mount('#app');
