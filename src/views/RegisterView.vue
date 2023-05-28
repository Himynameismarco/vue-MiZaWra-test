<template>

  <div class="register">
    <div class="heading">
      <h1>Create an account</h1>
      <p class="subtitle-register">Already have an Account? <a>Log In</a></p>
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

<script>
export default {
  name: "RegisterView.vue"
}
</script>


<style scoped>

.subtitle-register {
  font-size: 1rem;
  line-height: 25px;
  letter-spacing: 0.03em;
  text-align: left;
}

.register {
  grid-area: 3 / 4 / 10 / 9;
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
}

</style>

