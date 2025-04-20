<template>
   <div class="p-4">
       <!-- Hero Section -->
       <section class="mb-16">
           <div class="flex flex-col lg:flex-row items-center gap-8">
               <!-- Left side with text -->
               <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 max-w-4xl mx-auto flex flex-col justify-center">
                   <h2 class="text-2xl lg:text-3xl font-bold mb-4">
                       {{ $t('home.welcomeMessage') }}
                   </h2>
                   <h1 class="text-4xl lg:text-5xl font-bold mb-6">
                       <AnimatedText/>
                   </h1>
                   <p class="text-base lg:text-lg mb-8 leading-relaxed" v-html="$t('home.description')"></p>
                   <div class="flex flex-wrap gap-2">
                       <button
                           class="btn btn-circle btn-outline flex items-center justify-center"
                           @click="openLink(LINK_TELEGRAM)"
                       >
                           <img src="@/assets/icons/social_media/telegram-logo.svg" alt="Telegram" class="w-10 h-10"/>
                       </button>
                       <button
                           class="btn btn-circle btn-outline flex items-center justify-center"
                           @click="openLink(LINK_GITHUB_PROFILE)"
                       >
                           <img src="@/assets/icons/social_media/github-mark-white.svg" alt="GitHub" class="w-10 h-10"/>
                       </button>
                       <button
                           class="btn btn-circle btn-outline flex items-center justify-center"
                           @click="openLink(LINK_VK)"
                       >
                           <img src="@/assets/icons/social_media/vk-logo.svg" alt="VK" class="w-8 h-8"/>
                       </button>
                   </div>
               </div>
               <!-- Right side with image -->
               <div class="flex-1 flex justify-center items-center lg:p-16">
                  <div class="relative p-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full">
                      <img
                          src="/src/assets/logos/byteflipper.png"
                          alt="Home-Image"
                          class="w-[256px] h-[256px] object-cover rounded-full shadow-lg"
                      />
                      <div
                          class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 rounded-full opacity-50 blur-md glowing-effect"
                      ></div>
                  </div>
               </div>
           </div>
       </section>
 
     <section class="text-center mb-16">
       <h3 class="text-3xl font-bold mb-8 gradient-text">{{ $t('home.ourAndroidApps') }}</h3>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
         <Card
           :imageSrc="LINK_EVERBOOK_LOGO"
           :title="$t('home.cards.everbook.title')"
           :description="$t('home.cards.everbook.description')"
           textAlign="center"
           badgeText="NEW (Not released)"
           badgeColor="bg-green-500"
           @click="() => handleCardClick('Everbook')"
         />
         <Card
           :imageSrc="LINK_FFSETTINGS_LOGO"
           :title="$t('home.cards.ffsettings.title')"
           :description="$t('home.cards.ffsettings.description')"
           textAlign="center"
           badgeText="NEW"
           badgeColor="bg-green-500"
           @click="() => handleCardClick('FFSettings')"
         />
         <Card
           :imageSrc="LINK_MCBEDROCK_LOGO"
           :title="$t('home.cards.mcbedrock.title')"
           :description="$t('home.cards.mcbedrock.description')"
           textAlign="center"
           badgeText="STABLE"
           badgeColor="bg-green-500"
           @click="openLink(LINK_MCBEDROCK_GITHUB)"
         />
         <Card
           :imageSrc="LINK_STRONGHOLD_FINDER_LOGO"
           :title="$t('home.cards.strongholdFinder.title')"
           :description="$t('home.cards.strongholdFinder.description')"
           textAlign="center"
           badgeText="STABLE"
           badgeColor="bg-green-500"
           @click="openLink(LINK_STRONGHOLD_FINDER_GITHUB)"
         />
         <Card
           :imageSrc="LINK_MCIDS_LOGO"
           :title="$t('home.cards.mcids.title')"
           :description="$t('home.cards.mcids.description')"
           textAlign="center"
           badgeText="CLOSED"
           badgeColor="bg-red-800"
           @click="openLink(LINK_MCIDS_GITHUB)"
        />
       </div>
     </section>
   </div>
 </template>
 <script setup>
   import { useRouter } from 'vue-router';
   import Card from '@/components/Card.vue';
   import AnimatedText from '@/components/AnimatedText.vue';
   import {
     LINK_TELEGRAM,
     LINK_GITHUB_PROFILE,
     LINK_VK,
     LINK_EVERBOOK_LOGO,
     LINK_FFSETTINGS_LOGO,
     LINK_MCBEDROCK_LOGO,
     LINK_MCBEDROCK_GITHUB,
     LINK_STRONGHOLD_FINDER_LOGO,
     LINK_STRONGHOLD_FINDER_GITHUB,
     LINK_MCIDS_LOGO,
     LINK_MCIDS_GITHUB
   } from '@/config.constants'; // Импортируем константы

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
</style>
