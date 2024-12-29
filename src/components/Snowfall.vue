<template>
  <div v-if="isSnowing" class="snowfall-container">
    <div
      v-for="index in 100"
      :key="index"
      class="snowflake"
      :style="snowflakeStyle(index)"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    isSnowing: {
        type: Boolean,
        default: false,
    },
});


  const snowflakeStyle = (index) => {
    const randomX = Math.random() * 100;
    const randomSize = Math.random() * 4 + 1; // Размер от 1 до 5px
    const randomDelay = Math.random() * 10;
    const randomDuration = Math.random() * 15 + 5; // Длительность от 5 до 20s

    return {
      left: `${randomX}vw`,
      width: `${randomSize}px`,
      height: `${randomSize}px`,
      animationDelay: `${randomDelay}s`,
      animationDuration: `${randomDuration}s`
    };
  };
</script>

<style scoped>
.snowfall-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
}

.snowflake {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  opacity: 0.7;
  animation-name: snowfall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes snowfall {
  0% {
    transform: translateY(-10vh);
  }
  100% {
    transform: translateY(110vh);
  }
}
</style>