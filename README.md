# ByteFlipper Website

Это репозиторий для персонального сайта-портфолио ByteFlipper, разработанного с использованием Vue 3 и Vite.

## Рекомендуемая настройка IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (рекомендуется отключить Vetur).

## Настройка проекта

```sh
npm install
```

Устанавливает все необходимые зависимости проекта.

## Запуск для разработки

```sh
npm run dev
```

Запускает локальный сервер разработки с горячей перезагрузкой (Hot-Reload). Сайт будет доступен по адресу, указанному в терминале (обычно `http://localhost:5173/`).

## Сборка для Production

```sh
npm run build
```

Собирает оптимизированную версию сайта для развертывания в папку `dist`. Во время этого процесса также автоматически генерируется файл `public/sitemap.xml` с помощью `vite-plugin-sitemap`.

**Важно:** Перед сборкой убедитесь, что константа `BASE_URL` в файле `src/config.constants.js` установлена на правильный URL вашего сайта, так как она используется для генерации `sitemap.xml`.

## Развертывание (Deploy)

```sh
npm run deploy
```

Развертывает содержимое папки `dist` на GitHub Pages (ветка `gh-pages`). Убедитесь, что ваш репозиторий настроен для GitHub Pages.

## Управление контентом

### Добавление новой страницы приложения

1.  **Добавьте данные приложения:** Откройте файл `src/appData.js` и добавьте новый объект в массив `apps`, следуя структуре существующих объектов. Укажите уникальный `id`, ключи для локализации (`titleKey`, `descriptionKey` и т.д.), пути к логотипам и скриншотам, ссылки (используя константы из `src/config.constants.js`) и список особенностей (`features`).
2.  **Создайте компонент представления:** Создайте новый `.vue` файл в папке `src/views/` (например, `src/views/NewApp.vue`). Используйте компонент `AppPageLayout` для отображения данных:
    ```vue
    <template>
      <AppPageLayout v-if="appData" :appData="appData" />
      <div v-else>Loading...</div>
    </template>

    <script setup>
    import { ref, onMounted } from 'vue';
    import AppPageLayout from '@/components/AppPageLayout.vue';
    import { getAppData } from '@/appData';

    const appData = ref(null);

    onMounted(() => {
      // Замените 'new-app-id' на id вашего приложения из appData.js
      appData.value = getAppData('new-app-id');
    });
    </script>
    ```
3.  **Добавьте маршрут:** Откройте `src/router/index.js` и добавьте новый объект маршрута в массив `routes`, импортировав ваш новый компонент представления:
    ```javascript
    // ... другие импорты
    import NewApp from '@/views/NewApp.vue'; // Или динамический импорт

    const routes = [
      // ... другие маршруты
      {
        path: '/new-app', // Путь к новой странице
        name: 'NewApp',   // Уникальное имя маршрута
        component: NewApp // Или () => import('@/views/NewApp.vue')
      },
      // ... маршрут NotFound должен быть последним
    ];
    ```

### Локализация (i18n)

*   **Файлы переводов:** Текстовые строки для разных языков хранятся в JSON-файлах в папке `src/locales/` (например, `en.json`, `ru.json`).
*   **Добавление переводов:** Чтобы добавить новый текст, придумайте уникальный ключ (например, `newFeature.title`) и добавьте его с соответствующим переводом во все файлы локализации (`en.json`, `ru.json` и т.д.).
*   **Использование в шаблонах:** Используйте функцию `$t('your.key')` для отображения переведенной строки в шаблонах Vue:
    ```vue
    <template>
      <h1>{{ $t('pageTitle') }}</h1>
      <p>{{ $t('section.description') }}</p>
    </template>
    ```
*   **Переключение языка:** Переключатель языка находится в футере сайта. Логика определения и переключения языка находится в `src/i18n.js`. По умолчанию используется язык браузера (если поддерживается), затем сохраненный язык из `localStorage`, и в последнюю очередь - английский.

### Управление ссылками

*   **Файл констант:** Все внешние ссылки (URL) и некоторые внутренние пути к ресурсам хранятся как константы в файле `src/config.constants.js`.
*   **Добавление ссылок:** Если вам нужно добавить новую внешнюю ссылку, добавьте новую константу в `src/config.constants.js`:
    ```javascript
    export const LINK_NEW_SERVICE = "https://newservice.com/";
    ```
*   **Использование ссылок:** Импортируйте нужную константу в ваш `.vue` компонент и используйте ее в шаблоне (обычно с привязкой `:href`):
    ```vue
    <template>
      <a :href="LINK_NEW_SERVICE" target="_blank">New Service</a>
    </template>

    <script setup>
    import { LINK_NEW_SERVICE } from '@/config.constants';
    </script>
    ```
*   **Базовый URL:** Константа `BASE_URL` используется для генерации `sitemap.xml`. **Обязательно установите ее значение равным вашему реальному URL сайта.**

### Управление изображениями и другими ресурсами

*   **Структура папок:** Статические ресурсы (изображения, иконки, шрифты, музыка) хранятся в папке `src/assets/`. Используйте подпапки для организации (например, `src/assets/images/`, `src/assets/icons/`, `src/assets/logos/`).
*   **Добавление ресурсов:** Просто добавьте ваши файлы в соответствующую подпапку внутри `src/assets/`.
*   **Использование ресурсов:**
    *   **В шаблонах (`.vue`):** Используйте относительные пути от корня проекта или псевдоним `@`:
        ```vue
        <img src="@/assets/logos/logo.png" alt="Logo">
        <img src="/src/assets/images/my-picture.jpg" alt="My Picture"> <!-- Тоже работает -->
        ```
    *   **В CSS:** Используйте относительные пути:
        ```css
        .my-element {
          background-image: url('@/assets/images/background.jpg'); /* С псевдонимом */
          background-image: url('../assets/images/background.jpg'); /* Относительный путь */
        }
        ```
    *   **В `appData.js` или `config.constants.js`:** Используйте пути от корня проекта, начинающиеся с `/src/`:
        ```javascript
        export const MY_IMAGE_PATH = '/src/assets/images/my-image.png';
        ```
*   **Папка `public/`:** Ресурсы, которые должны быть доступны напрямую по URL без обработки Vite (например, `favicon.ico`, `robots.txt`, `sitemap.xml`), помещаются в папку `public/`. Ссылаться на них в коде нужно от корня сайта (например, `/favicon.ico`).

## Конфигурация Vite

Для детальной настройки Vite смотрите [Vite Configuration Reference](https://vitejs.dev/config/).
