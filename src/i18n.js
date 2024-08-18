import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

// Определяем поддерживаемые языки
const messages = {
  en,
  ru,
};

// Получаем язык пользователя из настроек браузера
const userLanguage = navigator.languages ? navigator.languages[0] : navigator.language;
const defaultLocale = userLanguage.split('-')[0]; // Извлекаем основной код языка (например, "en")

// Если язык пользователя не поддерживается, используем язык по умолчанию
const supportedLocales = ['en', 'ru'];
const locale = supportedLocales.includes(defaultLocale) ? defaultLocale : 'en';

const i18n = createI18n({
  locale, // Устанавливаем язык пользователя или язык по умолчанию
  fallbackLocale: 'en', // Язык по умолчанию, если перевод отсутствует
  messages,
});

export default i18n;
