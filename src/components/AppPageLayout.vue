<template>
  <div class="p-4">
    <!-- Основной контейнер -->
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <!-- Левая сторона с текстом -->
      <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 min-h-full flex flex-col justify-between">
        <div>
          <h1 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            {{ $t(appData.titleKey) }}
          </h1>
          <p class="text-base lg:text-lg mb-4">
            {{ $t(appData.descriptionKey) }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button v-if="appData.githubLink" class="btn" @click="openLink(appData.githubLink)">
            <img src="@/assets/icons/social_media/github-mark-white.svg" alt="GitHub" class="w-6 h-6 mr-2" />
            Github
          </button>
          <img v-if="appData.googlePlayLink"
            src="@/assets/images/badge/googleplay.png"
            alt="Google Play"
            class="w-40 h-auto cursor-pointer"
            @click="openLink(appData.googlePlayLink)"
          />
          <img v-if="appData.ruStoreLink"
            src="@/assets/images/badge/rustore.svg"
            alt="RuStore"
            class="w-32 h-auto cursor-pointer"
            @click="openLink(appData.ruStoreLink)"
          />
           <button v-if="appData.apkLink" class="btn" @click="openLink(appData.apkLink)">
             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
               <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                 <g transform="scale(8,8)">
                   <path d="M16,5c-4.11719,0 -7.35937,3.12891 -7.8125,7.125c-1.79297,0.30078 -3.24609,1.51953 -3.84375,3.21875c-2.46094,0.71094 -4.34375,2.90625 -4.34375,5.65625c0,3.32422 2.67578,6 6,6h20c3.32422,0 6,-2.67578 6,-6c0,-1.76172 -0.85547,-3.33594 -2.09375,-4.4375c-0.23047,-3.51562 -3.03516,-6.31641 -6.5625,-6.5c-1.20312,-2.92969 -3.96484,-5.0625 -7.34375,-5.0625zM16,7c2.76172,0 4.97266,1.76953 5.75,4.28125l0.21875,0.71875h1.03125c2.75391,0 5,2.24609 5,5v0.5l0.40625,0.3125c0.94531,0.70703 1.59375,1.92188 1.59375,3.1875c0,2.27734 -1.72266,4 -4,4h-20c-2.27734,0 -4,-1.72266 -4,-4c0,-2.01953 1.44922,-3.58594 3.28125,-3.90625l0.65625,-0.125l0.125,-0.65625c0.30078,-1.34766 1.49219,-2.3125 2.9375,-2.3125h1v-1c0,-3.37109 2.62891,-6 6,-6zM15,12v6.5625l-2.28125,-2.28125l-1.4375,1.4375l4,4l0.71875,0.6875l0.71875,-0.6875l4,-4l-1.4375,-1.4375l-2.28125,2.28125v-6.5625z"></path>
                 </g>
               </g>
             </svg>
             Download APK
           </button>
           <!-- Добавьте другие кнопки по необходимости -->
        </div>
      </div>
      <!-- Правая сторона с фото -->
      <div class="flex-1 flex justify-center items-center lg:p-16">
         <div class="relative p-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full">
            <img
               :src="appData.logo"
               :alt="appData.titleKey"
               class="w-[256px] h-[256px] object-cover rounded-full shadow-lg"
               />
            <!-- Эффект свечения -->
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 rounded-full opacity-50 blur-md glowing-effect"></div>
         </div>
      </div>
    </div>

    <!-- Секция Особенности -->
    <div v-if="appData.features && appData.features.length > 0" class="text-center mt-8">
      <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">{{ $t('ffsettings.features') }}</h3>
    </div>
    <div v-if="appData.features && appData.features.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
      <Card v-for="(feature, index) in appData.features" :key="index"
         :imageSrc="feature.imageSrc"
         imagePadding="16px"
         imageSize="128px"
         :imageBackgroundColor="feature.bgColor || '#ffffff'"
         :title="$t(feature.titleKey)"
         :description="$t(feature.descriptionKey)"
         textAlign="center"
         @click="() => null"
         />
    </div>

    <!-- Секция Скриншоты -->
    <div v-if="appData.screenshots && appData.screenshots.length > 0" class="text-center mt-16">
      <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">{{ $t(appData.screenshotTitleKey) }}</h3>
    </div>
    <div v-if="appData.screenshots && appData.screenshots.length > 0" class="carousel-container w-full overflow-x-auto">
      <div class="carousel flex">
         <div class="carousel-inner flex">
            <div v-for="(screenshot, index) in appData.screenshots" :key="index" class="carousel-item">
               <img
                  :src="screenshot"
                  class="rounded-box max-h-[500px] object-cover" />
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Card from '@/components/Card.vue'; // Предполагаем, что Card используется для фич

const props = defineProps({
  appData: {
    type: Object,
    required: true
  }
});

const openLink = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<style scoped>
@import "tailwindcss/tailwind.css";

@keyframes glowAnimation {
  0% { box-shadow: 0 0 15px rgba(255, 204, 0, 0.6), 0 0 30px rgba(255, 204, 0, 0.4), 0 0 45px rgba(255, 204, 0, 0.2); }
  50% { box-shadow: 0 0 30px rgba(255, 102, 0, 0.8), 0 0 60px rgba(255, 102, 0, 0.6), 0 0 90px rgba(255, 102, 0, 0.4); }
  100% { box-shadow: 0 0 45px rgba(255, 0, 0, 1), 0 0 90px rgba(255, 0, 0, 0.8), 0 0 135px rgba(255, 0, 0, 0.6); }
}
@keyframes rotateAnimation {
  0% { transform: rotate(5deg); }
  100% { transform: rotate(360deg); }
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
