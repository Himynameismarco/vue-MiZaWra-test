<script setup lang="ts">
import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'

</script>

<template>
  <NavBarLoggedOut />
  <div class="wrapper-logged-out">
    <div class="content">
      <div class="heading">
        <h1 class="heading-logged-out">Set New Password</h1>
        <h3 class="heading-logged-out">It must be at least 8 characters. </h3>
      </div>
      <form class="forms" @submit="tbd"> <!-- TODO -->
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <label for="password">Password Confirmation</label>
        <input type="password" id="passwordConfirmation" name="passwordConfirmation">
        <button class="logged-out-button">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>