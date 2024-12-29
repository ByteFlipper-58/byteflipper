<template>
   <div class="p-4">
      <!-- Основной контейнер -->
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
         <!-- Левая сторона с текстом -->
         <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 min-h-full flex flex-col justify-between">
            <div>
               <h1 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
                  FF Settings
               </h1>
               <p class="text-base lg:text-lg mb-4">
                  {{ $t('ffsettings.description') }}
               </p>
            </div>
            <div class="flex flex-wrap gap-2">
               <button class="btn" @click="openLink('https://github.com/ByteFlipper-58/FFSensitivities')">
               <img src="@/assets/icons/social_media/github-mark-white.svg" alt="GitHub" class="w-6 h-6 mr-2" />
               Github
               </button>
               <button class="btn" @click="openLink('https://play.google.com/store/apps/details?id=com.byteflipper.ffsensitivities')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="42px" height="42px">
                     <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(5.12,5.12)">
                           <path d="M7.125,2l21.65625,21.5l5.9375,-5.9375l-26.25,-15.15625c-0.4375,-0.25391 -0.90625,-0.39453 -1.34375,-0.40625zM5.3125,3c-0.19531,0.34766 -0.3125,0.75781 -0.3125,1.21875v41.78125c0,0.33594 0.07031,0.63672 0.1875,0.90625l22.15625,-22zM36.53125,18.59375l-6.34375,6.3125l6.34375,6.28125l7.75,-4.4375c1.10156,-0.63672 1.25781,-1.44531 1.25,-1.875c-0.01172,-0.71094 -0.46094,-1.375 -1.21875,-1.78125c-0.66016,-0.35547 -5.5625,-3.21094 -7.78125,-4.5zM28.78125,26.3125l-21.84375,21.65625c0.36328,-0.01953 0.75781,-0.09766 1.125,-0.3125c0.85547,-0.49609 18.15625,-10.5 18.15625,-10.5l8.53125,-4.90625z"></path>
                        </g>
                     </g>
                  </svg>
                  Google Play
               </button>
               <button class="btn" @click="openLink('https://github.com/ByteFlipper-58/FFSensitivities/releases/download/v1.2.5/app-release.apk')">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
                     <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(8,8)">
                           <path d="M16,5c-4.11719,0 -7.35937,3.12891 -7.8125,7.125c-1.79297,0.30078 -3.24609,1.51953 -3.84375,3.21875c-2.46094,0.71094 -4.34375,2.90625 -4.34375,5.65625c0,3.32422 2.67578,6 6,6h20c3.32422,0 6,-2.67578 6,-6c0,-1.76172 -0.85547,-3.33594 -2.09375,-4.4375c-0.23047,-3.51562 -3.03516,-6.31641 -6.5625,-6.5c-1.20312,-2.92969 -3.96484,-5.0625 -7.34375,-5.0625zM16,7c2.76172,0 4.97266,1.76953 5.75,4.28125l0.21875,0.71875h1.03125c2.75391,0 5,2.24609 5,5v0.5l0.40625,0.3125c0.94531,0.70703 1.59375,1.92188 1.59375,3.1875c0,2.27734 -1.72266,4 -4,4h-20c-2.27734,0 -4,-1.72266 -4,-4c0,-2.01953 1.44922,-3.58594 3.28125,-3.90625l0.65625,-0.125l0.125,-0.65625c0.30078,-1.34766 1.49219,-2.3125 2.9375,-2.3125h1v-1c0,-3.37109 2.62891,-6 6,-6zM15,12v6.5625l-2.28125,-2.28125l-1.4375,1.4375l4,4l0.71875,0.6875l0.71875,-0.6875l4,-4l-1.4375,-1.4375l-2.28125,2.28125v-6.5625z"></path>
                        </g>
                     </g>
                  </svg>
                  Download APK
               </button>
            </div>
         </div>
         <!-- Правая сторона с фото -->
         <div class="flex-1 flex justify-center items-center lg:p-16">
            <div class="relative p-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full">
               <img 
                  src="/src/assets/logos/ff-settings-logo.png" 
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
         <Card
            imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/cloud.gif?raw=true"
            :title="$t('ffsettings.featues.cloudTechnology.title')"
            :description="$t('ffsettings.featues.cloudTechnology.description')"
            textAlign="center"
            @click="() => null"
            />
         <Card
            imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/multi_language.gif?raw=true"
            :title="$t('ffsettings.featues.multilingualSupport.title')"
            :description="$t('ffsettings.featues.multilingualSupport.description')"
            textAlign="center"
            @click="() => null"
            />
         <Card
            imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/device.gif?raw=true"
            :title="$t('ffsettings.featues.manyBrands.title')"
            :description="$t('ffsettings.featues.manyBrands.description')"
            textAlign="center"
            @click="() => null"
            />
         <Card
            imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/images/animated/easy_ui.gif?raw=true"
            :title="$t('ffsettings.featues.minimalistUI.title')"
            :description="$t('ffsettings.featues.minimalistUI.description')"
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
                     src="/src/assets/images/ffsettings/screenshot_0.png"
                     class="rounded-box max-h-[500px] object-cover" />
               </div>
               <div class="carousel-item">
                  <img
                     src="/src/assets/images/ffsettings/screenshot_1.png"
                     class="rounded-box max-h-[500px] object-cover" />
               </div>
               <div class="carousel-item">
                  <img
                     src="/src/assets/images/ffsettings/screenshot_2.png"
                     class="rounded-box max-h-[500px] object-cover" />
               </div>
               <div class="carousel-item">
                  <img
                     src="/src/assets/images/ffsettings/screenshot_3.png"
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