import * as LINKS from '@/config.constants'; // Импортируем все константы ссылок

export const apps = [
  {
    id: 'everbook',
    titleKey: 'everbook.title', // Используем ключ для i18n
    descriptionKey: 'everbook.description',
    logo: '/src/assets/logos/everbook.png', // Локальный путь к лого
    githubLink: LINKS.LINK_EVERBOOK_GITHUB,
    googlePlayLink: LINKS.LINK_EVERBOOK_GOOGLE_PLAY,
    ruStoreLink: LINKS.LINK_EVERBOOK_RUSTORE,
    features: [
      {
        imageSrc: LINKS.LINK_EVERBOOK_IMG_BOOKS,
        titleKey: 'everbook.featues.supportedFileFormats.title',
        descriptionKey: 'everbook.featues.supportedFileFormats.description',
        bgColor: '#ffffff'
      },
      {
        imageSrc: LINKS.LINK_EVERBOOK_IMG_RESIZE,
        titleKey: 'everbook.featues.customization.title',
        descriptionKey: 'everbook.featues.customization.description',
        bgColor: '#ffffff'
      },
      {
        imageSrc: LINKS.LINK_EVERBOOK_IMG_PAINTING,
        titleKey: 'everbook.featues.themes.title',
        descriptionKey: 'everbook.featues.themes.description',
        bgColor: '#ffffff'
      },
      {
        imageSrc: LINKS.LINK_IMG_MULTI_LANGUAGE,
        titleKey: 'ffsettings.featues.multilingualSupport.title', // Используем общий ключ
        descriptionKey: 'ffsettings.featues.multilingualSupport.description', // Используем общий ключ
        bgColor: '#ffffff'
      },
      {
        imageSrc: LINKS.LINK_IMG_EASY_UI,
        titleKey: 'everbook.featues.minimalistUI.title',
        descriptionKey: 'everbook.featues.minimalistUI.description',
        bgColor: '#ffffff'
      }
    ],
    screenshots: [
      '/src/assets/images/everbook/Library.png',
      '/src/assets/images/everbook/Reader.png',
      '/src/assets/images/everbook/ReaderSettings.png',
      '/src/assets/images/everbook/History.png'
    ],
    screenshotTitleKey: 'ffsettings.screenshots' // Используем общий ключ
  },
  {
    id: 'ffsettings',
    titleKey: 'ffsettings.title', // Используем ключ для i18n (предполагая, что он есть)
    descriptionKey: 'ffsettings.description',
    logo: '/src/assets/logos/ff-settings-logo.png',
    githubLink: LINKS.LINK_FFSETTINGS_GITHUB,
    googlePlayLink: LINKS.LINK_FFSETTINGS_GOOGLE_PLAY,
    apkLink: LINKS.LINK_FFSETTINGS_APK_RELEASE,
    features: [
       {
        imageSrc: LINKS.LINK_IMG_CLOUD,
        titleKey: 'ffsettings.featues.cloudTechnology.title',
        descriptionKey: 'ffsettings.featues.cloudTechnology.description',
        bgColor: '#ffffff' // Пример цвета фона
      },
      {
        imageSrc: LINKS.LINK_IMG_MULTI_LANGUAGE,
        titleKey: 'ffsettings.featues.multilingualSupport.title',
        descriptionKey: 'ffsettings.featues.multilingualSupport.description',
        bgColor: '#ffffff'
      },
      {
        imageSrc: LINKS.LINK_IMG_DEVICE,
        titleKey: 'ffsettings.featues.manyBrands.title',
        descriptionKey: 'ffsettings.featues.manyBrands.description',
        bgColor: '#ffffff'
      },
      {
        imageSrc: LINKS.LINK_IMG_EASY_UI,
        titleKey: 'ffsettings.featues.minimalistUI.title',
        descriptionKey: 'ffsettings.featues.minimalistUI.description',
        bgColor: '#ffffff'
      }
    ],
    screenshots: [
      '/src/assets/images/ffsettings/screenshot_0.png',
      '/src/assets/images/ffsettings/screenshot_1.png',
      '/src/assets/images/ffsettings/screenshot_2.png',
      '/src/assets/images/ffsettings/screenshot_3.png'
    ],
    screenshotTitleKey: 'ffsettings.screenshots'
  }
  // Добавьте сюда другие приложения по мере необходимости
];

// Функция для удобного получения данных приложения по ID
export function getAppData(id) {
  return apps.find(app => app.id === id);
}
