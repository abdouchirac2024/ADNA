<template>
  <footer class="bg-gray-800 text-white py-8 lg:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
        <!-- Logo et description -->
        <div class="text-center lg:text-left col-span-1 lg:col-span-4 xl:col-span-1">
          <img src="/images/logo/logo-adna.png" alt="ADNA NDOG BAJTECK Logo" class="h-24 w-auto mx-auto lg:mx-0">
          <p class="mt-4 text-sm lg:text-base">Une communauté engagée pour le développement.</p>
        </div>

        <!-- Navigation, Support, Contact pour mobile (dropdown) -->
        <div class="block lg:hidden">
          <select class="w-full bg-gray-800 text-white py-2 border border-gray-700 rounded focus:outline-none">
            <option disabled selected>Pages</option>
            <option><a href="#">Accueil</a></option>
            <option><a href="#">À propos</a></option>
            <option><a href="#">Projets</a></option>
            <option><a href="#">Contact</a></option>
          </select>

          <select class="w-full bg-gray-800 text-white py-2 mt-4 border border-gray-700 rounded focus:outline-none">
            <option disabled selected>Support</option>
            <option><a href="#">FAQ</a></option>
            <option><a href="#">Aide</a></option>
            <option><a href="#">Politique de confidentialité</a></option>
          </select>

          <select class="w-full bg-gray-800 text-white py-2 mt-4 border border-gray-700 rounded focus:outline-none">
            <option disabled selected>Contact</option>
            <option>123 Rue Example, Ville, Pays</option>
            <option><a href="tel:+123456789">+123 456 7890</a></option>
            <option><a href="mailto:contact@adnandog.com">contact@adnandog.com</a></option>
          </select>
        </div>

        <!-- Navigation, Support, Contact pour écran large -->
        <div class="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-3">
          <!-- Pages -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-center sm:text-left">Pages</h3>
            <ul class="space-y-2 text-sm lg:text-base">
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">Accueil</a></li>
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">À propos</a></li>
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">Projets</a></li>
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">Contact</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-center sm:text-left">Support</h3>
            <ul class="space-y-2 text-sm lg:text-base">
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">FAQ</a></li>
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">Aide</a></li>
              <li><a href="#" class="hover:text-green-500 transition duration-300 block text-center sm:text-left">Politique de confidentialité</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-center sm:text-left">Contact</h3>
            <address class="not-italic text-sm lg:text-base space-y-2">
              <p class="text-center sm:text-left">123 Rue Example, Ville, Pays</p>
              <p class="text-center sm:text-left">
                <a href="tel:+123456789" class="hover:text-green-500 transition duration-300">+123 456 7890</a>
              </p>
              <p class="text-center sm:text-left">
                <a href="mailto:contact@adnandog.com" class="hover:text-green-500 transition duration-300">contact@adnandog.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-sm">&copy; {{ new Date().getFullYear() }} ADNA NDOG BAJTECK. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Custom style adjustments for dropdown */
select {
  background-color: #1a202c; /* Same as bg-gray-800 */
  color: white;
  padding: 8px;
  border: 1px solid #2d3748; /* bg-gray-700 */
  border-radius: 4px;
}
</style>
