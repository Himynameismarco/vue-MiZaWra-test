<script setup lang="ts">
import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'

</script>
<template>
  <div class="background">
  </div>
  <NavBarLoggedOut />
  <div class="wrapper-logged-out">
    <div class="content">
      <div class="heading">
        <h1 class="heading-logged-out">Forgot Password? </h1>
        <h3 class="heading-logged-out">Enter your email address</h3>
      </div>
      <form class="forms" action="register" method="post">
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email">
        <button class="logged-out-button">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>