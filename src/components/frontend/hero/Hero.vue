<template>
  <section class="relative h-[400px] md:h-[600px] text-white overflow-hidden">
    <transition-group name="fade" tag="div" class="absolute inset-0">
      <div v-for="(image, index) in images" :key="image" v-show="currentIndex === index" class="absolute inset-0">
        <img :src="image" :alt="`NDOG BAJTECK ${index + 1}`" class="w-full h-full object-cover object-center">
        <div class="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </transition-group>
    <div class="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-start relative z-10">
      <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
        Bienvenue chez
        <span class="text-green-600">{{ currentText }}</span>
        <span class="animate-blink">|</span>
      </h2>
      <button class="bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-600 transition duration-300 mt-4">
        Rejoignez-nous
      </button>
    </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'Hero',
    data() {
      return {
        images: [
          '/images/hero/home.jpg',
          '/images/hero/homea.jpg',
          '/images/hero/homeb.jpg',
          '/images/hero/homec.jpg'
        ],
        currentIndex: 0,
        imageTimer: null,
        texts: ['les Ndog BAJTECK', 'la Famille', 'la Communauté'],
        currentTextIndex: 0,
        currentText: '',
        isDeleting: false,
        textTimer: null
      }
    },
    mounted() {
      this.startSlideshow()
      this.typeText()
    },
    beforeUnmount() {
      this.stopSlideshow()
      clearTimeout(this.textTimer)
    },
    methods: {
      startSlideshow() {
        this.imageTimer = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length
        }, 5000) // Change image every 5 seconds
      },
      stopSlideshow() {
        clearInterval(this.imageTimer)
      },
      typeText() {
        const currentWord = this.texts[this.currentTextIndex]
        const typingSpeed = 100
        const deletingSpeed = 50
        const pauseBeforeDelete = 2000
  
        if (!this.isDeleting && this.currentText === currentWord) {
          // Pause before deleting
          this.textTimer = setTimeout(() => {
            this.isDeleting = true
            this.typeText()
          }, pauseBeforeDelete)
        } else if (this.isDeleting && this.currentText === '') {
          // Move to next word
          this.isDeleting = false
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length
          this.typeText()
        } else {
          // Type or delete
          this.currentText = currentWord.substring(0, this.isDeleting ? this.currentText.length - 1 : this.currentText.length + 1)
          this.textTimer = setTimeout(() => this.typeText(), this.isDeleting ? deletingSpeed : typingSpeed)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .animate-blink {
    animation: blink 0.7s infinite;
  }
  </style>