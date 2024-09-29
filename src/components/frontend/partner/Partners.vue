<template>
  <section class="py-8 md:py-16 bg-gray-100 dark:bg-gray-800 overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
      <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-gray-800 dark:text-white">Nos Partenaires</h2>
      <div class="relative">
        <div class="scroll-container flex">
          <div v-for="n in 5" :key="n" class="flex items-center space-x-4 md:space-x-8 animate-scroll">
            <div v-for="(partner, index) in partners" :key="`${n}-${index}`" class="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img :src="partner.logo" :alt="partner.name" class="max-h-12 max-w-12 md:max-h-16 md:max-w-16 object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      partners: [
        { name: 'Orange', logo: '/images/partenaire/orange.png' },
        { name: 'Canal+', logo: '/images/partenaire/canal.jpeg' },
        { name: 'UBA', logo: '/images/partenaire/uba.png' },
        { name: 'Dangote', logo: '/images/partenaire/dangote.png' },
      ]
    }
  }
}
</script>

<style scoped>
.scroll-container {
  width: 200%;
  display: flex;
  overflow: hidden;
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.scroll-container:hover .animate-scroll {
  animation-play-state: paused;
}

/* Ajustement pour les écrans plus petits */
@media (max-width: 768px) {
  .animate-scroll {
    animation-duration: 20s; /* Animation plus rapide sur mobile */
  }
}
</style>