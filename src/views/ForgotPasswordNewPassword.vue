<script setup lang="ts">
import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'
import { usePasswordValidation } from '../composables/usePasswordValidation';

const { password, passwordConfirmation, passwordError, validatePassword } = usePasswordValidation();

function handleSubmit() {
  if (validatePassword()) {
    // Continue with password reset logic
    // TODO: Password reset logic goes here
  }
}

</script>

<template>
  <NavBarLoggedOut />
  <div class="wrapper-logged-out">
    <div class="content">
      <div class="heading">
        <h1 class="heading-logged-out">Set New Password</h1>
        <h3 class="heading-logged-out">It must be at least 8 characters. </h3>
      </div>
      <form class="forms" @submit.prevent="handleSubmit"> <!-- TODO @submit -->
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password">
        <label for="password">Password Confirmation</label>
        <input type="password" id="passwordConfirmation" name="passwordConfirmation" v-model="passwordConfirmation">
        <p v-if="passwordError">{{ passwordError }}</p>
        <button class="logged-out-button">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>