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
          <h1 class="heading-logged-out">Create an Account</h1>
          <h3 class="heading-logged-out">Already have an Account? <RouterLink to="/login">Log In</RouterLink>
          </h3>
        </div>
        <form class="forms" action="register" method="post">
          <label for="firstName">First name</label>
          <input type="text" id="firstName" name="firstName">
          <label for="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName">
          <label for="email">E-Mail</label>
          <input type="email" id="email" name="email">
          <label for="password">Password</label>
          <input type="password" id="password" name="password">
          <p class="sub-password">Use 8 or more characters with a mix of letters, numbers, and symbols</p>
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

