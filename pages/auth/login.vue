<template>
  <div class="container max-w-5xl mx-auto px-4 sm:px-6">
    <section class="max-w-4xl mx-auto text-center mt-16 sm:mt-24">
      <div class="pb-12 md:pb-20">
        <h1 class="text-5xl sm font-bold mb-4 text-verde">Regístrate gratis</h1>
        <p class="text-xl">
          Podrás crear tus
          <span class="font-bold">facturas</span> facturas gratis y de manera
          ilimitada
        </p>
      </div>
      <div class="max-w-sm mx-auto">
        <SocialLoginButton type="google" @click="loginWithGoogle" />
        <div class="flex items-center my-6">
          <div class="border-t border-gray-100 flex-grow mr-4"></div>
          <div class="text-sm">O regístrate con tu email</div>
          <div class="border-t border-gray-700 flex-grow ml-4"></div>
        </div>
        <div>
          <Inputsform />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    async loginWithGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await this.$fire.auth.signInWithPopup(provider);
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
