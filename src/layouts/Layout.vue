<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed top-0 left-0 right-0 bg-neutral bg-opacity-50 backdrop-blur-md p-4 flex items-center justify-between z-50">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="@/assets/logos/logo.png" alt="Logo" class="logo" />
          <h1 class="text-2xl lg:text-3xl font-bold mb-0 ml-4 gradient-text">ByteFlipper</h1>
        </router-link>
      </div>
      <div class="flex items-center space-x-4">
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
        <nav :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class="lg:flex lg:items-start lg:space-x-4">
          <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <router-link to="/" class="nav-button">
              <img src="@/assets/icons/ui/home.svg" alt="home" class="w-5 h-5 mr-2" />
              {{ $t('menu.home') }}
            </router-link>
            <router-link to="/about" class="nav-button">
              <img src="@/assets/icons/ui/info.svg" alt="about" class="w-5 h-5 mr-2" />
              {{ $t('menu.aboutMe') }}
            </router-link>
            <router-link to="/contact" class="nav-button">
              <img src="@/assets/icons/ui/contacts.svg" alt="contact" class="w-5 h-5 mr-2" />
              {{ $t('menu.contactMe') }}
            </router-link>
          </div>
        </nav>
      </div>
    </header>
    <main class="flex-grow p-4 mt-20">
      <router-view :key="locale"></router-view> <!-- Добавляем key -->
    </main>
    <footer class="bg-neutral text-sm p-4 text-center font-bold"> <!-- Убираем @click="resetCache" -->
      <span class="footer-gradient">
      © Made with ❤️ by
      <a :href="LINK_BYTEFLIPPER_WEBSITE" target="_blank" rel="noopener noreferrer">
      ByteFlipper
      </a>
      </span>
      <!-- Language Switcher -->
      <div class="mt-4">
        <button @click="switchLanguage" class="btn btn-sm btn-outline">
          {{ currentLanguageLabel }}
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale } from '@/i18n'; // Импортируем функцию setLocale
import { LINK_BYTEFLIPPER_WEBSITE } from '@/config.constants'; // Импортируем константу

const { t, locale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const loadSettingsFromStorage = () => {
  const hasSeenGreeting = localStorage.getItem('hasSeenGreeting');
  if (hasSeenGreeting === null) {
    localStorage.setItem('hasSeenGreeting', 'true');
    // resetCache(); // Убираем вызов, вызывающий перезагрузку
  }
};

// Удаляем функцию resetCache
// const resetCache = () => {
//   if (ENABLE_RESET_CACHE) {
//     localStorage.clear();
//     sessionStorage.clear();
//     location.reload();
//     window.scrollTo(0, 0);
//   }
// };

const switchLanguage = () => {
  const newLocale = locale.value === 'ru' ? 'en' : 'ru';
  setLocale(newLocale);
};

const currentLanguageLabel = computed(() => {
  return locale.value === 'ru' ? 'RU' : 'EN';
});

onMounted(() => {
  loadSettingsFromStorage();
});
</script>

<style scoped>
  header {
    backdrop-filter: blur(12px);
    background-color: rgba(75, 65, 65, 0.2);
  }
  .logo {
    height: 40px;
    width: auto;
  }
  .gradient-text {
    display: inline-block;
    background: linear-gradient(90deg, #fd6900, #f4097b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-weight: bold;
  }
  .nav-button {
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    padding: 8px 0;
  }
  .nav-button:hover {
    color: #fd6900;
  }
  @media (max-width: 1023px) {
    nav {
      backdrop-filter: blur(12px);
      background-color: #121C22;
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      padding: 10px;
      z-index: 40;
      transform: translateY(-100%);
      transition: transform 0.3s ease-in-out;
    }
    nav.block {
      transform: translateY(0);
    }
    nav.hidden {
      transform: translateY(-100%);
    }
    .nav-button {
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    nav {
      display: flex !important;
      position: static;
      transform: none;
    }
  }
  .swap {
    transition: transform 0.3s ease;
  }
  .swap:hover {
    transform: scale(1.1);
  }
  .swap-rotate {
    transition: transform 0.3s ease;
  }
  .swap-rotate[class*='swap-active'] {
    transform: rotate(360deg);
  }
</style>
