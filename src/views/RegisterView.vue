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
  <div class="background">
  </div>
  <NavBarLoggedOut />
    <div class="wrapper-logged-out">
      <div class="content">
        <div class="heading">
          <h1 class="heading-logged-out">Create an Account</h1>
          <h3 class="heading-logged-out">Already have an Account? <RouterLink to="/login">Log In</RouterLink>
          </h3>
        </div>
        <form class="forms" action="register" @submit.prevent="handleSubmit" method="post">
          <label for="firstName">First name</label>
          <input type="text" id="firstName" name="firstName">
          <label for="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName">
          <label for="email">E-Mail</label>
          <input type="email" id="email" name="email" v-model="password">
          <label for="password">Password</label>
          <input type="password" id="password" name="password">
          <p class="sub-password">Use 8 or more characters with a mix of letters, numbers, and symbols</p>
          <label for="password">Password Confirmation</label>
          <input type="password" id="passwordConfirmation" name="passwordConfirmation" v-model="passwordConfirmation">
          <p v-if="passwordError">{{ passwordError }}</p>
          <button class="logged-out-button">Sign Up</button>
        </form>
      </div>
    </div>
</template>


<style scoped>

#password {
  margin-bottom: .8vh;
}

</style>

