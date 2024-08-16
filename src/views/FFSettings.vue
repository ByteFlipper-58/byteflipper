<template>
    <div class="p-4">
       <!-- Основной контейнер -->
       <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <!-- Левая сторона с текстом -->
          <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 max-w-4xl mx-auto">
             <h1 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
                FF Settings
             </h1>
             <p class="text-base lg:text-lg mb-4">
                {{ $t('ffsettings.description') }}
             </p>
             <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
                   <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                      <g transform="scale(4,4)">
                         <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                      </g>
                   </g>
                </svg>
                Github
             </button>
             <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="42px" height="42px">
                   <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                      <g transform="scale(5.12,5.12)">
                         <path d="M7.125,2l21.65625,21.5l5.9375,-5.9375l-26.25,-15.15625c-0.4375,-0.25391 -0.90625,-0.39453 -1.34375,-0.40625zM5.3125,3c-0.19531,0.34766 -0.3125,0.75781 -0.3125,1.21875v41.78125c0,0.33594 0.07031,0.63672 0.1875,0.90625l22.15625,-22zM36.53125,18.59375l-6.34375,6.3125l6.34375,6.28125l7.75,-4.4375c1.10156,-0.63672 1.25781,-1.44531 1.25,-1.875c-0.01172,-0.71094 -0.46094,-1.375 -1.21875,-1.78125c-0.66016,-0.35547 -5.5625,-3.21094 -7.78125,-4.5zM28.78125,26.3125l-21.84375,21.65625c0.36328,-0.01953 0.75781,-0.09766 1.125,-0.3125c0.85547,-0.49609 18.15625,-10.5 18.15625,-10.5l8.53125,-4.90625z"></path>
                      </g>
                   </g>
                </svg>
                Google Play
             </button>
             <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
                   <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                      <g transform="scale(4,4)">
                         <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                      </g>
                   </g>
                </svg>
                Download APK
             </button>
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
    
    const openTelegramChannel = () => {
      window.open('https://t.me/byteflipper', '_blank');
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