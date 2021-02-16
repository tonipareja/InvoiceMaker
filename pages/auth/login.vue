<template>
  <div class="container max-w-5xl mx-auto px-4 sm:px-6">
    <section class="max-w-4xl mx-auto text-center mt-16 sm:mt-32">
      <h1 class="text-3xl font-bold mb-8">Log In</h1>
      <SocialLoginButton type="google" @click="loginWithGoogle" />
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    async loginWithGoogle() {
      try {
        const provider = new this.$fireAuthObj.GoogleAuthProvider();
        const result = await this.$fireAuth.signInWithPopup(provider);
        console.log(result);
      } catch {
        //TODO show toast
        console.log("login error");
      }
    }
  }
};
</script>

<style></style>
