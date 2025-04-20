<template>
  <AppPageLayout v-if="appData" :appData="appData" />
  <div v-else>
    <!-- Можно добавить сообщение о загрузке или ошибке -->
    Loading app data...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppPageLayout from '@/components/AppPageLayout.vue';
import { getAppData } from '@/appData'; // Импортируем функцию для получения данных

const appData = ref(null);

onMounted(() => {
  // Загружаем данные для 'ffsettings'
  appData.value = getAppData('ffsettings');
});
</script>
