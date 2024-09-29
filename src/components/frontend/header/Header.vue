<!-- src/components/frontend/header/Header.vue -->
<template>
  <header class="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 py-2 sm:py-3">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="flex items-center justify-between w-full sm:w-auto">
          <!-- Logo -->
          <router-link to="/" class="flex items-center">
            <img 
              src="/images/logo/logo-adna.png" 
              alt="ADNA logo" 
              class="h-10 w-auto sm:h-12 md:h-14 lg:h-16" 
            >
          </router-link>
          <div class="flex items-center space-x-2 sm:hidden">
            <DarkModeToggle />
            <select v-model="currentLanguage" @change="changeLanguage" class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-1 py-1 rounded text-xs">
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
            <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                <path v-if="mobileMenuOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Texte défilant (visible sur tous les appareils) -->
        <div class="w-full sm:w-auto mt-2 sm:mt-0">
          <div class="relative overflow-hidden border border-green-600 rounded-lg w-full h-8 sm:h-10 md:h-12 flex items-center">
            <div class="animate-scrolling-text whitespace-nowrap px-4">
              <p class="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-green-600">Bienvenue sur ADNA NDOG BAJECK</p>
            </div>
          </div>
        </div>
        
        <!-- Boutons (cachés sur mobile, visibles à partir de sm) -->
        <div class="hidden sm:flex items-center space-x-2 md:space-x-4 mt-2 sm:mt-0">
          <router-link to="/adhere" class="bg-yellow-500 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full hover:bg-yellow-600 flex items-center justify-center h-8 sm:h-10 w-auto text-xs sm:text-sm md:text-base">
            <span>Adhérer</span>
          </router-link>
          <DarkModeToggle />
          <select v-model="currentLanguage" @change="changeLanguage" class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <div class="relative hidden md:block">
            <input type="search" placeholder="Search..." class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-2 sm:px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800 dark:text-white hover:text-green-500">
              <MagnifyingGlassIcon class="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation desktop -->
    <nav class="hidden sm:block bg-green-600 py-2">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex justify-center space-x-4 md:space-x-9 mx-auto">
          <div v-for="item in menuItems" :key="item.name" class="relative group">
            <router-link :to="item.href" class="text-white hover:text-yellow-300 cursor-pointer">
              <div class="flex flex-col items-center">
                <div class="rounded-full bg-white p-1 sm:p-2 mb-1">
                  <component :is="item.icon" class="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <span class="text-xs sm:text-sm">{{ item.name }}</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="hidden sm:block">
          <router-link to="/member-access" class="bg-yellow-500 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full hover:bg-yellow-600 flex items-center justify-center h-8 sm:h-10 w-auto text-xs sm:text-sm md:text-base">
            <span>Accès membre</span>
          </router-link>
        </div>
      </div>
    </nav>
    
    <!-- Menu mobile -->
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="mobileMenuOpen" class="sm:hidden bg-green-600">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <div v-for="item in menuItems" :key="item.name">
            <router-link :to="item.href" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 hover:text-white">
              {{ item.name }}
            </router-link>
          </div>
          <router-link to="/adhere" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 hover:text-white">Adhérer</router-link>
          <router-link to="/member-access" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 hover:text-white">Accès membre</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref } from 'vue'
import DarkModeToggle from '../../DarkModeToggle.vue'
import { MagnifyingGlassIcon, HomeIcon, UserGroupIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'Header',
  components: {
    DarkModeToggle,
    MagnifyingGlassIcon,
    HomeIcon,
    UserGroupIcon
  },
  setup() {
    const menuItems = [
      { name: 'Accueil', href: '/', icon: HomeIcon },
      { name: 'Organigramme', href: '/organigramme', icon: UserGroupIcon }
    ]

    const mobileMenuOpen = ref(false)
    const currentLanguage = ref('fr')

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const changeLanguage = () => {
      console.log('Langue changée pour:', currentLanguage.value)
    }

    return {
      menuItems,
      mobileMenuOpen,
      currentLanguage,
      toggleMobileMenu,
      changeLanguage
    }
  }
}
</script>

<style scoped>
/* Animation du texte défilant */
.animate-scrolling-text {
  animation: scroll-text 20s linear infinite;
}

@keyframes scroll-text {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); } 
}

@media (min-width: 640px) {
  .animate-scrolling-text {
    animation: scroll-text 25s linear infinite;
  }
}

@media (min-width: 768px) {
  .animate-scrolling-text {
    animation: scroll-text 30s linear infinite;
  }
}
</style>
