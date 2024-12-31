<template>
  <div v-if="isVisible" class="greeting-message">
    <p class="greeting-text">{{ $t('greeting.message') }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isVisible = ref(false);

onMounted(() => {
  const hasSeenGreeting = localStorage.getItem('hasSeenGreeting');
  if (!hasSeenGreeting) {
    isVisible.value = true;
    localStorage.setItem('hasSeenGreeting', 'true');
    setTimeout(() => {
      isVisible.value = false;
    }, 10000);
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
  padding: 30px;
  border-radius: 12px;
  z-index: 2000;
  animation: fadeIn 0.5s ease-out forwards;
  max-width: 95%; /* Для мобильных устройств */
  width: 500px; /* Базовая ширина */
  box-sizing: border-box;
}

.greeting-text {
  font-size: 1.8rem; /* Универсальный размер текста */
  color: white;
  text-align: center;
  white-space: pre-wrap; /* Поддержка переноса строк (\n) */
  animation: slideInFromBottom 1s ease-in-out;
  line-height: 1.6; /* Улучшение читаемости */
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

@media (min-width: 768px) {
  .greeting-message {
    width: 600px;
    padding: 40px;
  }

  .greeting-text {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .greeting-message {
    width: 800px;
  }
}
</style>
