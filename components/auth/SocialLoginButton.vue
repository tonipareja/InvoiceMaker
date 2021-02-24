<template>
  <button
    class="text-sm sm:text-base py-3 border-2 rounded-lg text-grisaceo w-full focus:outline-none"
    :class="type"
    @click="$emit('click')"
  >
    <i class="fab fa-google mr-4"></i>Regístrate con Google
  </button>
</template>

<script>
export default {
  name: "SocialLoginButton",
  props: {
    type: {
      type: String,
      default: "google",
      validate: value => ["google"].includes(value)
    }
  }
};
</script>

<style scoped>
.google {
  background-color: #db4a39;
  border-color: #db4a39;
}

.google:hover {
  background-color: #bb3222;
  border-color: #bb3222;
}
</style>
