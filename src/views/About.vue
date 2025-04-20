<template>
   <div class="p-4">
     <section class="mb-16">
       <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
         <div class="flex-1 lg:pr-8 lg:p-16 min-h-full flex flex-col justify-between">
           <div>
             <h1 class="text-4xl font-bold mb-6 gradient-text">
                {{ $t('menu.aboutMe') }}
             </h1>
             <p class="text-lg mb-8 leading-relaxed" v-html="$t('aboutMe.description')"></p>
           </div>
         </div>
         <div class="flex-1 flex justify-center items-center lg:p-16">
           <div class="relative p-2 bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 rounded-full">
             <img
                 src="/src/assets/images/my-picture.jpg"
                 alt="Profile Picture"
                 class="w-[256px] h-[256px] object-cover rounded-full shadow-lg"
             />
             <div class="absolute inset-0 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 rounded-full opacity-50 blur-md glowing-effect"></div>
           </div>
         </div>
       </div>
     </section>
     <section class="text-center mb-16">
       <h3 class="text-3xl font-bold mb-8 gradient-text">{{ $t('aboutMe.skills') }}</h3>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
         <Card
             :imageSrc="LINK_IMG_ANDROID_ROBOT"
             imagePadding="16px"
             imageSize="128px"
             imageBackgroundColor="#73b57b"
             :title="$t('aboutMe.skillsCards.skill1.title')"
             :description="$t('aboutMe.skillsCards.skill1.description')"
             textAlign="center"
             @click="() => null"
         />
           <Card
               :imageSrc="LINK_IMG_WEB"
               imagePadding="16px"
               imageSize="128px"
               imageBackgroundColor="#6b95cd"
               :title="$t('aboutMe.skillsCards.skill2.title')"
               :description="$t('aboutMe.skillsCards.skill2.description')"
               textAlign="center"
               @click="() => null"
           />
           <Card
               :imageSrc="LINK_IMG_GITHUB"
               imagePadding="16px"
               imageSize="128px"
               imageBackgroundColor="#5e6778"
               :title="$t('aboutMe.skillsCards.skill3.title')"
               :description="$t('aboutMe.skillsCards.skill3.description')"
               textAlign="center"
               @click="() => null"
           />
           <Card
               :imageSrc="LINK_IMG_DESIGN"
               imagePadding="16px"
               imageSize="128px"
               imageBackgroundColor="#948c8c"
               :title="$t('aboutMe.skillsCards.skill4.title')"
               :description="$t('aboutMe.skillsCards.skill4.description')"
               textAlign="center"
               @click="() => null"
           />
       </div>
     </section>
   </div>
 </template>
<script setup>
  import { useRouter } from 'vue-router';
  import Card from '@/components/Card.vue';
  import {
    LINK_IMG_ANDROID_ROBOT,
    LINK_IMG_WEB,
    LINK_IMG_GITHUB,
    LINK_IMG_DESIGN
  } from '@/config.constants'; // Импортируем константы

  const router = useRouter();

  const openLink = (url) => {
    window.open(url, '_blank');
  };
</script>
<style scoped>
   @import "tailwindcss/tailwind.css";
    @keyframes glowAnimation {
        0% {
            box-shadow: 0 0 15px rgba(0, 204, 255, 0.6), 0 0 30px rgba(0, 204, 255, 0.4), 0 0 45px rgba(0, 204, 255, 0.2);
        }
        50% {
            box-shadow: 0 0 30px rgba(0, 153, 255, 0.8), 0 0 60px rgba(0, 153, 255, 0.6), 0 0 90px rgba(0, 153, 255, 0.4);
        }
        100% {
            box-shadow: 0 0 45px rgba(0, 102, 255, 1), 0 0 90px rgba(0, 102, 255, 0.8), 0 0 135px rgba(0, 102, 255, 0.6);
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
