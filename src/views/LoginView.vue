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
        <h1 class="heading-logged-out">Welcome Back</h1>
        <h3 class="heading-logged-out">Don't have an account? <RouterLink to="/register">Sign Up</RouterLink></h3>
      </div>
      <form class="forms" action="register" method="post">
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <RouterLink to="/forgotPassword" class="sub-password">Forgot password?</RouterLink>
        <button class="logged-out-button">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

#password {
  margin-bottom: .8vh;
}

</style>