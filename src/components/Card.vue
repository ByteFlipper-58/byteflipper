<!--
  Created by ByteFlipper.
  
  Usage:
  <Card
    imageSrc="url_to_image"         // URL of the image (optional)
    title="Title"                   // Title of the card
    description="Description"       // Description of the card
    textAlign="center"              // Text alignment ('left', 'center', 'right')
    onClick="function() { console.log('Card clicked!'); }"  // Click handler function (optional)
    badgeText="New"                 // Badge text (optional)
    badgeColor="bg-primary"         // Badge color (e.g., 'bg-primary') (optional)
    imagePadding="10px"             // Padding for the image (optional)
    imageBackgroundColor="#ffffff"  // Background color for the image (optional)
    imageSize="96px"                // Size of the image (optional)
  />
-->
<template>
  <div
     class="card relative bg-neutral text-neutral-content shadow-xl p-5 transition-transform transition-shadow transition-filter transition-border hover:shadow-2xl hover:scale-105 hover:brightness-110 hover:translate-y-[-5px] hover:border hover:border-base-100"
     @click="handleClick"
     >
     <div v-if="badgeText" :class="badgeClass" class="badge absolute top-2 right-2">
        {{ badgeText }}
     </div>
     <div v-if="imageSrc" class="avatar mx-auto mb-4">
        <div 
           class="image-container"
           :style="{ 
           backgroundColor: imageBackgroundColor,
           padding: imagePadding,
           width: imageSize,
           height: imageSize
           }"
           >
           <img :src="imageSrc" alt="Card image" class="image" />
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
      imagePadding: {
        type: String,
        default: '0',
      },
      imageBackgroundColor: {
        type: String,
        default: 'transparent',
        validator(value) {
          return /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$|^rgba?\(\d{1,3},\s?\d{1,3},\s?\d{1,3}(,\s?\d?\.\d+)?\)$/.test(value);
        },
      },
      imageSize: {
        type: String,
        default: '96px', // Можно указать значение по умолчанию
        validator(value) {
          return /^\d+(px|em|rem|%)?$/.test(value);
        },
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
  .avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .image-container {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  }
  .image {
  width: 100%;
  height: 100%;
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
  z-index: 10;
  }
</style>