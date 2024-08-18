<template>
  <span class="inline-block">
    I Am a <span class="animated-text">{{ displayedText }}</span>
    <span class="typed-cursor" aria-hidden="true"></span>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const texts = t('animatedTexts') || []; // Получаем массив текстов из i18n и используем пустой массив по умолчанию
const index = ref(0); // Индекс текущего слова
const displayedText = ref(''); // Текущее отображаемое слово

const typeText = () => {
  if (texts.length === 0) return; // Если массив пуст, не выполняем функцию

  let i = 0;
  const text = texts[index.value];
  displayedText.value = '';

  const interval = setInterval(() => {
    if (i < text.length) {
      displayedText.value += text[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        index.value = (index.value + 1) % texts.length;
        typeText();
      }, 1000); // Пауза перед сменой слова
    }
  }, 150); // Скорость печати
};

onMounted(() => {
  typeText();
});
</script>

<style scoped>
.animated-text {
  display: inline;
  background: linear-gradient(90deg, #f4097b, #fd6900);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  border-right: 0.15em solid #fd6900;
  padding-right: 0.2em;
  white-space: nowrap;
  overflow: hidden;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  0% { border-color: transparent; }
  50% { border-color: #fd6900; }
  100% { border-color: transparent; }
}
</style>
