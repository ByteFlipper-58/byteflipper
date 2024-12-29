<template>
    <div v-if="isVisible" class="greeting-message">
        <p class="greeting-text">{{ $t('greeting.message') }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const isVisible = ref(false);

onMounted(() => {
  const hasSeenGreeting = localStorage.getItem('hasSeenGreeting');
  if (!hasSeenGreeting) {
    isVisible.value = true;
     localStorage.setItem('hasSeenGreeting', 'true');
    setTimeout(() => {
      isVisible.value = false;
    }, 5000)
  }
});


</script>

<style scoped>
.greeting-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 40px;
  border-radius: 10px;
  z-index: 2000;
  animation: fadeIn 0.5s ease-out forwards;
}

.greeting-text {
    font-size: 2rem;
    color: white;
    text-align: center;
  animation: slideInFromBottom 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideInFromBottom {
  from {
    transform: translateY(50px);
      opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>