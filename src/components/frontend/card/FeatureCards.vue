<template>
  <section class="py-8 md:py-12 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4 md:px-6">
      <div class="w-16 h-1 bg-green-600 mb-4"></div>
      
      <!-- Carrousel pour mobile -->
      <div v-if="isMobile" class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-300 ease-in-out" 
               :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(feature, index) in features" :key="index" class="w-full flex-shrink-0 px-2">
              <div class="feature-card bg-green-100 dark:bg-green-700 rounded-lg p-4 md:p-6 flex flex-col h-full hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <div class="flex-grow flex flex-col items-center">
                  <img :src="feature.icon" :alt="feature.title" class="feature-icon w-12 h-12 md:w-16 md:h-16 mb-4 transition-transform duration-500">
                  <h3 class="text-base md:text-lg font-semibold mb-2 text-center">{{ feature.title }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300 text-center">{{ feature.description }}</p>
                </div>
                <div class="mt-4 text-center">
                  <button class="feature-button bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base hover:bg-green-600 transition duration-300 transform hover:scale-105">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Grille pour tablette et desktop -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card bg-green-100 dark:bg-green-700 rounded-lg p-4 md:p-6 flex flex-col h-full hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
        >
          <div class="flex-grow flex flex-col items-center">
            <img
              :src="feature.icon"
              :alt="feature.title"
              class="feature-icon w-12 h-12 md:w-16 md:h-16 mb-4 transition-transform duration-500"
            >
            <h3 class="text-base md:text-lg font-semibold mb-2 text-center">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 text-center">{{ feature.description }}</p>
          </div>
          <div class="mt-4 text-center">
            <button
              class="feature-button bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base hover:bg-green-600 transition duration-300 transform hover:scale-105"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'FeatureCards',
  setup() {
    const features = [
      { 
        title: "Vision", 
        icon: "/images/card/vision-icon.svg",
        description: "Notre vision pour l'avenir de la communauté"
      },
      { 
        title: "Objectifs", 
        icon: "/images/card/objectives-icon.svg",
        description: "Les buts que nous nous efforçons d'atteindre"
      },
      { 
        title: "Organigramme", 
        icon: "/images/card/organigram-icon.svg",
        description: "La structure de notre organisation"
      },
      { 
        title: "Secteurs", 
        icon: "/images/card/sectors-icon.svg",
        description: "Les domaines dans lesquels nous opérons"
      },
    ]

    const isMobile = ref(window.innerWidth < 640)
    const currentIndex = ref(0)

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % features.length
    }

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + features.length) % features.length
    }

    const handleResize = () => {
      isMobile.value = window.innerWidth < 640
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      features,
      isMobile,
      currentIndex,
      nextSlide,
      prevSlide
    }
  }
}
</script>

<style scoped>
/* Animation de rebond sur l'icône au survol */
.feature-card:hover .feature-icon {
  animation: bounce 1s ease-in-out infinite;
}

/* Animation de rebond */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animation au survol du bouton (agrandissement) */
.feature-button:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>