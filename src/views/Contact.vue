<template>
  <div class="p-4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
     <!-- Левая сторона с кнопками социальных сетей -->
     <div class="flex-1 lg:pr-8 lg:p-16 min-h-full flex flex-col justify-center lg:justify-start">
        <div class="lg:mt-8">
           <h2 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text leading-tight lg:leading-[3rem]">
              {{ $t('contactMe.socialNetwork') }}
           </h2>
           <div class="flex flex-col gap-4">
              <a href="https://twitter.com/byteflipper" target="_blank" class="btn btn-outline text-base lg:text-lg">
              <img src="@/assets/icons/x-logo.svg" alt="Twitter" class="w-6 h-6 mr-2" />
              Twitter
              </a>
              <a href="https://t.me/byteflipper" target="_blank" class="btn btn-outline text-base lg:text-lg">
              <img src="@/assets/icons/telegram-logo-white.svg" alt="Telegram" class="svg-icon mr-2" />
              Telegram
              </a>
              <a href="https://vk.com/byteflipper" target="_blank" class="btn btn-outline text-base lg:text-lg">
              <img src="@/assets/icons/vk-logo-white.svg" alt="VK" class="w-6 h-6 mr-2" />
              VK
              </a>
              <a href="https://github.com/byteflipper-58" target="_blank" class="btn btn-outline text-base lg:text-lg">
              <img src="@/assets/icons/github-mark-white.svg" alt="LinkedIn" class="w-6 h-6 mr-2" />
              Github
              </a>
           </div>
        </div>
     </div>
     <!-- Правая сторона с формой контактов -->
     <div class="flex-1 lg:p-16 min-h-full flex flex-col justify-center">
        <div class="bg-gray-800 p-8 rounded-2xl shadow-lg">
           <h1 class="text-2xl lg:text-3xl font-bold mb-4 gradient-text leading-tight lg:leading-[3rem]">
              {{ $t('contactMe.form.title') }}
           </h1>
           <form @submit.prevent="submitForm">
              <div class="form-control mb-4">
                 <label class="label">
                 <span class="label-text text-gray-200">{{ $t('contactMe.form.yourname') }}</span>
                 </label>
                 <input
                    type="text"
                    v-model="name"
                    :placeholder="$t('contactMe.form.enteryourname')"
                    class="input input-bordered bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    :disabled="isSubmitting"
                    required
                    />
              </div>
              <div class="form-control mb-4">
                 <label class="label">
                 <span class="label-text text-gray-200">{{ $t('contactMe.form.youremail') }}</span>
                 </label>
                 <input
                    type="email"
                    v-model="email"
                    :placeholder="$t('contactMe.form.enteryouremail')"
                    class="input input-bordered bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    :disabled="isSubmitting"
                    required
                    @input="validateEmail"
                    />
                 <p v-if="emailError" class="text-red-500 mt-2">{{ emailError }}</p>
              </div>
              <div class="form-control mb-4">
                 <label class="label">
                 <span class="label-text text-gray-200">{{ $t('contactMe.form.message') }}</span>
                 </label>
                 <textarea
                    v-model="message"
                    :placeholder="$t('contactMe.form.enteryourmessage')"
                    class="textarea textarea-bordered bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    :disabled="isSubmitting"
                    required
                    ></textarea>
              </div>
              <!-- reCAPTCHA widget -->
              <!-- <div class="form-control mb-4">
                 <div class="g-recaptcha" data-sitekey="6LfGFykqAAAAADwRSncVX7CPbVyB_TdOeHcgn-d9"></div>
                 </div> -->
              <div class="form-control mt-6">
                 <button
                    type="submit"
                    class="btn bg-gray-700 text-gray-100 hover:bg-gray-600 w-full"
                    :disabled="isSubmitting"
                    >
                 {{ isSubmitting ? $t('contactMe.form.sending') : $t('contactMe.form.submit') }}
                 </button>
              </div>
           </form>
        </div>
     </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import emailjs from 'emailjs-com';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const emailError = ref('');
  const isSubmitting = ref(false);
  
  // Отправка формы
  const submitForm = async () => {
    try {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailError.value || !emailPattern.test(email.value)) {
        alert('Пожалуйста, введите действительный email на английском.');
        return;
      }
  
      // Устанавливаем состояние отправки
      isSubmitting.value = true;
  
      // Код получения токена reCAPTCHA закомментирован
  
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAILJS_USER_ID;
  
      await emailjs.send(serviceID, templateID, {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
        // 'g-recaptcha-response': recaptchaToken // Эта строка закомментирована
      }, userID);
  
      // Очистка полей формы
      name.value = '';
      email.value = '';
      message.value = '';
  
      alert('Сообщение успешно отправлено!');
    } catch (error) {
      console.error('Ошибка при отправке email:', error);
      alert('Произошла ошибка при отправке сообщения. Попробуйте еще раз.');
    } finally {
      // Сброс состояния отправки
      isSubmitting.value = false;
    }
  };
  
  // Проверка email на наличие неанглийских символов
  const validateEmail = () => {
    const nonEnglishPattern = /[^\x00-\x7F]/g;
    if (nonEnglishPattern.test(email.value)) {
      emailError.value = 'Email должен содержать только английские буквы и символы.';
    } else {
      emailError.value = '';
    }
  };
</script>
<style scoped>
  @import "tailwindcss/tailwind.css";
  .gradient-text {
  display: inline-block;
  background: linear-gradient(90deg, #f4097b, #fd6900);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: bold;
  }
  .bg-gray-700 {
  background-color: #3d3d3d;
  }
  .input,
  .textarea {
  background-color: #3d3d3d;
  border: 2px solid;
  }
  .btn {
  transition: background-color 0.3s;
  }
  .text-base {
  font-size: 1rem;
  }
  .lg\:leading-\[3rem\] {
  line-height: 3rem;
  }
  .rounded-2xl {
  border-radius: 1rem;
  }
  .svg-icon {
  width: 2.5em;
  height: 2.5em;
  }
</style>