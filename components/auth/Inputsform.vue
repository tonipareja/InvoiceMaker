<template>
  <div class="flex flex-wrap mb-4">
    <div class="w-full">
      <label class="text-sm text-left font-medium mb-1 block" :for="name">
        Text label
        <span class="text-rojoclose font-bold">*</span>
      </label>
      <input
        id=""
        class="form-input w-full text-sm sm:text-base py-3 px-4 border-2 rounded-lg"
        placeholder="Your name"
        type="text"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-input {
  border-color: #333333;
  border-width: 1px;
}
</style>
