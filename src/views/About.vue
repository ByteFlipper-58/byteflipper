<template>
    <div class="p-4">
      <!-- Основной контейнер -->
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <!-- Левая сторона с текстом -->
        <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 min-h-full flex flex-col justify-between">
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              About Me
            </h1>
            <p class="text-base lg:text-lg mb-4" v-html="$t('aboutMe.description')"></p>
          </div>
        </div>
        <!-- Правая сторона с фото -->
        <div class="flex-1 flex justify-center items-center lg:p-16">
          <div class="relative p-2 bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 rounded-full">
            <img 
              src="/src/assets/images/my-picture.jpg" 
              alt="Profile Picture" 
              class="w-[256px] h-[256px] object-cover rounded-full shadow-lg"
              />
            <!-- Эффект свечения -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 rounded-full opacity-50 blur-md glowing-effect"></div>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">{{ $t('aboutMe.skills') }}</h3>
      </div>
      <!-- Грид-контейнер для карточек -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <Card
          imageSrc="src/assets/images/about/Android_Robot.png"
          :title="$t('aboutMe.skillsCards.skill1.title')"
          :description="$t('aboutMe.skillsCards.skill1.description')"
          textAlign="center"
          @click="() => null"
        />
        <Card
          imageSrc="https://your-image-url.com/skill2.png"
          :title="$t('aboutMe.skillsCards.skill2.title')"
          :description="$t('aboutMe.skillsCards.skill2.description')"
          textAlign="center"
          @click="() => null"
        />
        <Card
          imageSrc="https://your-image-url.com/skill3.png"
          :title="$t('aboutMe.skillsCards.skill3.title')"
          :description="$t('aboutMe.skillsCards.skill3.description')"
          textAlign="center"
          @click="() => null"
        />
        <Card
          imageSrc="https://your-image-url.com/skill4.png"
          :title="$t('aboutMe.skillsCards.skill4.title')"
          :description="$t('aboutMe.skillsCards.skill4.description')"
          textAlign="center"
          @click="() => null"
        />
      </div>
      <div class="text-center mt-16">
        <h3 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text">{{ $t('aboutMe.projects') }}</h3>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import Card from '@/components/Card.vue';
  
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
    background: linear-gradient(90deg, #007bff, #6610f2);
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
  