<template>
  <section class="py-8 md:py-16 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col mb-6 md:mb-8">
        <div class="w-16 h-1 bg-green-600 mb-4"></div>
        <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-left dark:text-white reveal-text">
          Nos temps forts
        </h2>
      </div>
      
      <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="image-container w-full md:w-2/3 h-64 md:h-96 overflow-hidden relative">
            <img src="/images/highlit/medium.jpg" alt="Un diner après un meeting" class="image w-full h-full object-cover transition-transform duration-500">
          </div>
          <div class="p-4 md:p-6 md:w-1/2 flex flex-col justify-center">
            <h3 class="text-lg md:text-xl font-semibold mb-2 dark:text-white reveal-text">UN DINER APRÈS UN MEETING</h3>
            <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 reveal-text">
              Découvrez les moments qui ont résonné dans notre association, des jalons qui ont forgé notre avenir.
            </p>
            <button class="mt-4 bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base hover:bg-yellow-600 transition-colors duration-300">
              Lire plus
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Highlights',
  mounted() {
    // Ajoute une classe de révélation lors du défilement
    const revealTextElements = document.querySelectorAll('.reveal-text');
    const revealOnScroll = () => {
      revealTextElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewHeight = window.innerHeight;
        if (elementPosition < viewHeight - 50) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    // Appeler la fonction une fois au chargement pour révéler les éléments déjà visibles
    revealOnScroll();
  }
}
</script>

<style scoped>
/* Les styles restent les mêmes, mais nous ajoutons une media query pour ajuster l'animation sur mobile */
@media (max-width: 768px) {
  .image-container:hover .image {
    transform: scale(1.05); /* Réduire légèrement le zoom sur mobile */
  }
}
</style>