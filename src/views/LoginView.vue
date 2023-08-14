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

.logged-out-button {
  margin-top: 60px;

  height: 45px;
  border: 1px solid rgba(102, 102, 102, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  font-weight: 400;
  font-size: 19px; /* TODO: make variable */
  line-height: 150%;
  font-family: "Roboto Mono", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

</style>