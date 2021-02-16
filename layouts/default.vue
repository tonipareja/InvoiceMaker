<template>
  <div class="h-screen text-gray-800 antialiased">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/ui/Navbar'
export default {
  components: {
    Navbar,
  },

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap");

body {
  font-family: Krub, Helvetica, sans-serif !important;
}
</style>
