<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import { onMounted, ref } from 'vue';
import Layout from './layouts/Layout.vue';
import i18n from './i18n'; // Импортируем i18n

export default {
  components: {
    Layout,
  }
};
</script>

<style scoped>
@import "tailwindcss/tailwind.css";
</style>