<script setup lang="ts">
import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'

</script>
<template>
  <NavBarLoggedOut />
  <div class="register">
    <div class="heading">
      <h1 class="heading-logged-out">Create an Account</h1>
      <h3 class="heading-logged-out">Already have an Account? <a>Log In</a></h3>
    </div>
    <form class="register-form" action="register" method="post">
      <label for="firstName">First name</label>
      <input type="text" id="firstName" name="firstName">
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" name="lastName">
      <label for="email">E-Mail</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <p class="sub-password">(Use eight or more characters with a mix of letters, numbers, and symbols)</p>
    </form>
  </div>
</template>


<style scoped>

.register {
  grid-area: 3 / 2 / 10 / 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

.register .heading {
  flex-direction: column;
  justify-content: flex-start;
}

.register-form {
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

#password {
  margin-bottom: .8vh;
}

.sub-password {
  font-size: var(--font-size-label);
  font-family: "Roboto Flex", Roboto Monospaced, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
@media (max-width: 1024px) {
  .register {
    grid-area: 2 / 2 / 5 / 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
}

</style>

