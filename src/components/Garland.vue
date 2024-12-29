<template>
  <div v-if="isGarlandActive" class="garland-container" :style="containerStyle">
      <div class="garland"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
  isGarlandActive: {
      type: Boolean,
      default: false,
  },
  position: {
      type: String,
      default: 'top',
       validator(value) {
          return ['top', 'bottom', 'left', 'right'].includes(value);
      },
  }
})

const containerStyle = computed(() => {
  switch (props.position) {
      case 'top':
          return { top: '10px', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50px' };
      case 'bottom':
          return { bottom: '10px', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50px' };
      case 'left':
          return { left: '10px', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '80%' };
      case 'right':
          return { right: '10px', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '80%' };
      default:
          return { top: '10px', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50px' };
  }
})

</script>

<style scoped>
.garland-container {
  position: fixed;
   pointer-events: none;
  z-index: 1000;
}
.garland {
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.garland::before {
  content: "";
  position: absolute;
  top: -20px;
  width: 100%;
  height: 10px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="gray"><circle cx="4" cy="4" r="2"></circle></svg>');
  background-repeat: repeat-x;
  background-size: 20px;
  pointer-events: none;
  z-index: 100;
}

.garland::after {
  content: "";
  position: absolute;
  top: -10px;
  width: 100%;
  height: 10px;
  background-color: white;
  pointer-events: none;
  z-index: 10;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
}

.garland::before {
  animation: garland-rotate 5s linear infinite;
}

@keyframes garland-rotate {
  0% { transform: translateX(0) rotate(0deg);  }
  50% {  transform: translateX(5px) rotate(3deg);  }
  100% { transform: translateX(0) rotate(0deg);  }
}
</style>