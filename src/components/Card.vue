<template>
  <div
    class="card relative bg-neutral text-neutral-content shadow-xl p-5 transition-transform transition-shadow transition-filter transition-border hover:shadow-2xl hover:scale-105 hover:brightness-110 hover:translate-y-[-5px] hover:border hover:border-base-100"
    @click="handleClick"
  >
    <div v-if="badgeText" :class="badgeClass" class="badge absolute top-2 right-2">
      {{ badgeText }}
    </div>
    <div v-if="imageSrc" class="avatar mx-auto mb-4">
      <div class="w-24 rounded-full">
        <img :src="imageSrc" alt="Card image" />
      </div>
    </div>
    <div :class="textAlignmentClass">
      <h2 :style="{ fontWeight: 'bold', textAlign: textAlign }">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    imageSrc: {
      type: String,
      default: '',
      validator(value) {
        return /\.(png|gif|svg|jpg|jpeg)$/.test(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    textAlign: {
      type: String,
      default: 'center',
      validator(value) {
        return ['left', 'center', 'right'].includes(value);
      },
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    badgeText: {
      type: String,
      default: '',
    },
    badgeColor: {
      type: String,
      default: 'bg-primary',
    },
  },
  computed: {
    textAlignmentClass() {
      switch (this.textAlign) {
        case 'left':
          return 'text-left';
        case 'right':
          return 'text-right';
        case 'center':
        default:
          return 'text-center';
      }
    },
    badgeClass() {
      return `${this.badgeColor} text-white rounded px-2 py-1 text-xs`;
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style scoped>
.avatar img {
  object-fit: cover;
}

.card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease,
    border 0.3s ease;
  border: 2px solid transparent;
}

.card:hover {
  filter: brightness(110%);
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  border-color: #f9fafb;
}

.badge {
  z-index: 10; /* Ensure badge is above other elements */
}
</style>
