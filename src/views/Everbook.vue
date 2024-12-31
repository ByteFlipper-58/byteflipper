<template>
    <div class="p-4">
       <!-- Основной контейнер -->
       <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
  <!-- Левая сторона с текстом -->
  <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 min-h-full flex flex-col justify-between">
    <div>
      <h1 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
        EverBook
      </h1>
      <p class="text-base lg:text-lg mb-4">
        {{ $t('everbook.description') }}
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <button class="btn" @click="openLink('https://github.com/ByteFlipper-58/book-story')">
        <img src="@/assets/icons/social_media/github-mark-white.svg" alt="GitHub" class="w-6 h-6 mr-2" />
        Github
      </button>
      <img 
    src="@/assets/images/badge/googleplay.png" 
    alt="Google Play" 
    class="w-40 h-auto cursor-pointer" 
    @click="openLink('https://play.google.com/store/apps/details?id=com.byteflipper.everbook')" 
  />
  <img 
    src="@/assets/images/badge/rustore.svg" 
    alt="RuStore" 
    class="w-32 h-auto cursor-pointer" 
    @click="openLink('https://apps.rustore.ru/app/com.byteflipper.everbook')" 
  />
    </div>
  </div>
          <!-- Правая сторона с фото -->
          <div class="flex-1 flex justify-center items-center lg:p-16">
             <div class="relative p-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full">
                <img 
                   src="/src/assets/logos/everbook.png" 
                   alt="Home-Image" 
                   class="w-[256px] h-[256px] object-cover rounded-full shadow-lg"
                   />
                <!-- Эффект свечения -->
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 rounded-full opacity-50 blur-md glowing-effect"></div>
             </div>
          </div>
       </div>
       <div class="text-center mt-8">
          <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">{{ $t('ffsettings.features') }}</h3>
       </div>
       <!-- Грид-контейнер для карточек -->
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Card
             imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/everbook/books.gif?raw=true"
             imagePadding="16px"
             imageSize="128px"
             imageBackgroundColor="#ffffff"
             :title="$t('everbook.featues.supportedFileFormats.title')"
             :description="$t('everbook.featues.supportedFileFormats.description')"
             textAlign="center"
             @click="() => null"
             />
          <Card
             imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/everbook/resize.gif?raw=true"
             imagePadding="16px"
             imageSize="128px"
             imageBackgroundColor="#ffffff"
             :title="$t('everbook.featues.customization.title')"
             :description="$t('everbook.featues.customization.description')"
             textAlign="center"
             @click="() => null"
             />
         <Card
             imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/everbook/painting.gif?raw=true"
             imagePadding="16px"
             imageSize="128px"
             imageBackgroundColor="#ffffff"
             :title="$t('everbook.featues.themes.title')"
             :description="$t('everbook.featues.themes.description')"
             textAlign="center"
             @click="() => null"
             />
          <Card
             imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/multi_language.gif?raw=true"
             imageSize="128px"
             imageBackgroundColor="#ffffff"
             :title="$t('ffsettings.featues.multilingualSupport.title')"
             :description="$t('ffsettings.featues.multilingualSupport.description')"
             textAlign="center"
             @click="() => null"
             />
          <Card
             imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/easy_ui.gif?raw=true"
             imageSize="128px"
             imageBackgroundColor="#ffffff"
             :title="$t('everbook.featues.minimalistUI.title')"
             :description="$t('everbook.featues.minimalistUI.description')"
             textAlign="center"
             @click="() => null"
             />
       </div>
       <div class="text-center mt-16">
          <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">{{ $t('ffsettings.screenshots') }}</h3>
       </div>
       <!-- Карусель -->
       <div class="carousel-container w-full overflow-x-auto">
          <div class="carousel flex">
             <div class="carousel-inner flex">
                <div class="carousel-item">
                   <img
                      src="/src/assets/images/everbook/Library.png"
                      class="rounded-box max-h-[500px] object-cover" />
                </div>
                <div class="carousel-item">
                   <img
                      src="/src/assets/images/everbook/Reader.png"
                      class="rounded-box max-h-[500px] object-cover" />
                </div>
                <div class="carousel-item">
                   <img
                      src="/src/assets/images/everbook/ReaderSettings.png"
                      class="rounded-box max-h-[500px] object-cover" />
                </div>
                <div class="carousel-item">
                   <img
                      src="/src/assets/images/everbook/History.png"
                      class="rounded-box max-h-[500px] object-cover" />
                </div>
                <!-- Добавьте больше элементов по мере необходимости -->
             </div>
          </div>
       </div>
    </div>
 </template>
 <script setup>
    import { useRouter } from 'vue-router';
    import Card from '@/components/Card.vue';
    import AnimatedText from '@/components/AnimatedText.vue';
    
    const router = useRouter();
    
    const handleCardClick = (routeName) => {
      router.push({ name: routeName });
    };
    
    const openLink = (url) => {
    window.open(url, '_blank');
    };
 </script>
 <style scoped>
    @import "tailwindcss/tailwind.css";
    @keyframes glowAnimation {
    0% {
    box-shadow: 0 0 15px rgba(255, 204, 0, 0.6), 0 0 30px rgba(255, 204, 0, 0.4), 0 0 45px rgba(255, 204, 0, 0.2);
    }
    50% {
    box-shadow: 0 0 30px rgba(255, 102, 0, 0.8), 0 0 60px rgba(255, 102, 0, 0.6), 0 0 90px rgba(255, 102, 0, 0.4);
    }
    100% {
    box-shadow: 0 0 45px rgba(255, 0, 0, 1), 0 0 90px rgba(255, 0, 0, 0.8), 0 0 135px rgba(255, 0, 0, 0.6);
    }
    }
    @keyframes rotateAnimation {
    0% {
    transform: rotate(5deg);
    }
    100% {
    transform: rotate(360deg);
    }
    }
    .glowing-effect {
    animation: glowAnimation 3s infinite alternate, rotateAnimation 10s linear infinite;
    }
    .gradient-text {
    display: inline-block;
    background: linear-gradient(90deg, #f4097b, #fd6900);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-weight: bold;
    }
    .carousel-container {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow-x: auto;
    }
    .carousel {
    display: flex;
    gap: 16px; /* расстояние между скринами */
    }
    .carousel-inner {
    display: flex;
    }
    .carousel-item {
    flex: 0 0 auto; /* Не позволяет элементам сжиматься или растягиваться */
    width: 300px; /* Ширина каждого элемента карусели */
    }
 </style>