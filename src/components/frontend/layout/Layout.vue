<!-- src/components/frontend/layout/Layout.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <slot></slot>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../header/Header.vue'
  import Footer from '../footer/Footer.vue'
  
  export default {
    name: 'Layout',
    components: {
      Header,
      Footer
    }
  }
  </script>