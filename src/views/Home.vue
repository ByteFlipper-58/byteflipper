<template>
  <div class="p-4">
    <!-- Основной контейнер -->
    <div class="flex flex-col lg:flex-row items-stretch gap-8">
      <!-- Левая сторона с текстом -->
      <div class="flex-1 lg:pr-8 mb-8 lg:mb-0 lg:p-16 max-w-4xl mx-auto flex flex-col justify-center">
        <h2 class="text-xl lg:text-2xl font-bold mb-4">Hi there!</h2>
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">
          <AnimatedText />
        </h1>
        <p class="text-base lg:text-lg mb-4" v-html="$t('home.description')"></p>
        <div class="flex flex-wrap gap-2">
          <button class="btn btn-circle btn-outline flex items-center justify-center">
            <img
              src="@/assets/icons/telegram-logo.svg"
              alt="Telegram"
              class="w-10 h-10"
            />
          </button>
          <button class="btn btn-circle btn-outline flex items-center justify-center">
            <img
              src="@/assets/icons/github-mark-white.svg"
              alt="GitHub"
              class="w-10 h-10"
            />
          </button>
          <button class="btn btn-circle btn-outline flex items-center justify-center">
            <img
              src="@/assets/icons/vk-logo.svg"
              alt="VK"
              class="w-8 h-8"
            />
          </button>
        </div>
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
