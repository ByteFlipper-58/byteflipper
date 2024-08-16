<template>
  <div class="p-4">
     <!-- Основной контейнер -->
     <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <!-- Левая сторона с текстом -->
        <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 max-w-4xl mx-auto">
           <h2 class="text-xl lg:text-2xl font-bold mb-4">Hi there!</h2>
           <h1 class="text-3xl lg:text-4xl font-bold mb-4">
              <AnimatedText />
           </h1>
           <p class="text-base lg:text-lg mb-4">
              Бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла 
           </p>
           <button class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
                 <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <g transform="scale(5,5)">
                       <path d="M5.83,23.616c12.568,-5.529 28.832,-12.27 31.077,-13.203c5.889,-2.442 7.696,-1.974 6.795,3.434c-0.647,3.887 -2.514,16.756 -4.002,24.766c-0.883,4.75 -2.864,5.313 -5.979,3.258c-1.498,-0.989 -9.059,-5.989 -10.7,-7.163c-1.498,-1.07 -3.564,-2.357 -0.973,-4.892c0.922,-0.903 6.966,-6.674 11.675,-11.166c0.617,-0.59 -0.158,-1.559 -0.87,-1.086c-6.347,4.209 -15.147,10.051 -16.267,10.812c-1.692,1.149 -3.317,1.676 -6.234,0.838c-2.204,-0.633 -4.357,-1.388 -5.195,-1.676c-3.227,-1.108 -2.461,-2.543 0.673,-3.922z"></path>
                    </g>
                 </g>
              </svg>
           </button>
           <button class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
                 <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <g transform="scale(4,4)">
                       <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                    </g>
                 </g>
              </svg>
           </button>
           <button class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px">
                 <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <g transform="scale(5.12,5.12)">
                       <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,12.682 10.318,23 23,23c12.683,0 23,-10.318 23,-23c0,-12.682 -10.317,-23 -23,-23zM34.973,29.535c2.237,1.986 2.702,2.695 2.778,2.816c0.927,1.47 -1.028,1.649 -1.028,1.649h-4.12c0,0 -1.003,0.011 -1.86,-0.557c-1.397,-0.915 -2.86,-2.689 -3.888,-2.381c-0.863,0.258 -0.855,1.424 -0.855,2.421c0,0.357 -0.307,0.517 -1,0.517c-0.693,0 -0.981,0 -1.288,0c-2.257,0 -4.706,-0.76 -7.149,-3.313c-3.456,-3.609 -6.487,-10.879 -6.487,-10.879c0,0 -0.179,-0.366 0.016,-0.589c0.221,-0.25 0.822,-0.218 0.822,-0.218l3.995,-0.001c0,0 0.376,0.071 0.646,0.261c0.223,0.156 0.347,0.454 0.347,0.454c0,0 0.671,2.216 1.526,3.629c1.67,2.758 2.447,2.828 3.014,2.531c0.828,-0.43 0.558,-3.362 0.558,-3.362c0,0 0.037,-1.259 -0.395,-1.82c-0.333,-0.434 -0.97,-0.665 -1.248,-0.701c-0.225,-0.029 0.151,-0.423 0.63,-0.648c0.64,-0.285 1.511,-0.358 3.013,-0.344c1.169,0.011 1.506,0.081 1.962,0.186c1.379,0.318 1.038,1.157 1.038,4.103c0,0.944 -0.13,2.271 0.582,2.711c0.307,0.19 1.359,0.422 3.231,-2.618c0.889,-1.442 1.596,-3.834 1.596,-3.834c0,0 0.146,-0.263 0.373,-0.393c0.232,-0.133 0.225,-0.13 0.543,-0.13c0.318,0 3.507,-0.025 4.207,-0.025c0.699,0 1.355,-0.008 1.468,0.402c0.162,0.589 -0.516,2.607 -2.234,4.797c-2.823,3.594 -3.136,3.258 -0.793,5.336z"></path>
                    </g>
                 </g>
              </svg>
           </button>
        </div>
        <!-- Правая сторона с фото -->
        <div class="flex-1 flex justify-center items-center lg:p-16">
           <div class="relative p-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full">
              <img 
                 src="/src/assets/logos/byteflipper.png" 
                 alt="Home-Image" 
                 class="w-[256px] h-[256px] object-cover rounded-full shadow-lg"
                 />
              <!-- Эффект свечения -->
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 rounded-full opacity-50 blur-md glowing-effect"></div>
           </div>
        </div>
     </div>
     <div class="text-center mt-8">
        <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">Our Android Apps</h3>
     </div>
     <!-- Грид-контейнер для карточек -->
     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <Card
           imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/logos/ff-settings-logo.png?raw=true"
           :title="$t('home.cards.ffsettings.title')"
           :description="$t('home.cards.ffsettings.description')"
           textAlign="center"
           badgeText="NEW"
           badgeColor="bg-green-500"
           @click="() => handleCardClick('FFSettings')"
           />
        <Card
           imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/logos/mcbedrock-logo.png?raw=true"
           :title="$t('home.cards.mcbedrock.title')"
           :description="$t('home.cards.mcbedrock.description')"
           textAlign="center"
           badgeText="STABLE"
           badgeColor="bg-green-500"
           @click="openTelegramChannel"
           />
        <Card
           imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/logos/end-portal-finder-logo.png?raw=true"
           :title="$t('home.cards.strongholdFinder.title')"
           :description="$t('home.cards.strongholdFinder.description')"
           textAlign="center"
           badgeText="STABLE"
           badgeColor="bg-green-500"
           @click="() => handleCardClick('ServerStatus')"
           />
        <Card
           imageSrc="https://github.com/ByteFlipper-58/byteflipper/blob/main/src/assets/logos/mcids-logo.png?raw=true"
           :title="$t('home.cards.mcids.title')"
           :description="$t('home.cards.mcids.description')"
           textAlign="center"
           badgeText="CLOSED"
           badgeColor="bg-red-800"
           @click="() => handleCardClick('ServerStatus')"
           />
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
</style>