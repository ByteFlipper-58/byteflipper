import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

// Определяем поддерживаемые языки
const messages = {
  en,
  ru,
};

// Функция для получения сохраненного языка, языка браузера или языка по умолчанию
function getInitialLocale() {
  const savedLocale = localStorage.getItem('locale');
  const supportedLocales = ['en', 'ru'];

  // 1. Проверяем сохраненный язык
  if (savedLocale && supportedLocales.includes(savedLocale)) {
    return savedLocale;
  }

  // 2. Определяем язык браузера
  const browserLanguage = navigator.languages ? navigator.languages[0] : navigator.language;
  const browserLocale = browserLanguage.split('-')[0]; // Извлекаем основной код языка (например, "en")

  // 3. Проверяем, поддерживается ли язык браузера
  if (supportedLocales.includes(browserLocale)) {
    return browserLocale;
  }

  // 4. Возвращаем язык по умолчанию (английский)
  return 'en';
}

const i18n = createI18n({
  legacy: false, // Важно для Composition API
  locale: getInitialLocale(), // Устанавливаем начальный язык
  fallbackLocale: 'en', // Язык по умолчанию, если перевод отсутствует
  messages,
});

// Функция для изменения языка
export function setLocale(locale) {
  if (i18n.global.availableLocales.includes(locale)) {
    i18n.global.locale.value = locale;
    localStorage.setItem('locale', locale); // Сохраняем выбор пользователя
    document.querySelector('html').setAttribute('lang', locale); // Обновляем атрибут lang
  } else {
    console.warn(`Locale ${locale} is not supported.`);
  }
}

// Устанавливаем начальный атрибут lang для html
document.querySelector('html').setAttribute('lang', getInitialLocale());

export default i18n;
