<script setup lang="ts">
import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'

</script>
<template>
  <div class="background">
  </div>
  <NavBarLoggedOut />
    <div class="register">
      <div class="content">
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
          <p class="sub-password">Use 8 or more characters with a mix of letters, numbers, and symbols</p>
          <button class="sign-up">Sign Up</button>
        </form>
      </div>
    </div>
</template>


<style scoped>


.register {
  position: relative;
  display: grid;
  grid-template-columns: auto 464px auto; /* 5 */
  grid-template-rows: 229px auto; /* 6 */
}

.background {
  left: -949px;
  top: calc(var(--nav-height) + 446px);
  height: 1684px;
  width: 1517px;
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, rgba(205, 232, 43, 0.5) 0%, rgba(205, 232, 43, 0) 100%);
}

.register .content {
  position: relative;
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

.content .heading {
  flex-direction: column;
  justify-content: flex-start;
}

.register-form {
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 287px;
}

#password {
  margin-bottom: .8vh;
}

.sub-password {
  font-size: 11px;
  letter-spacing: -0.01em;
}

.sign-up {
  background: var(--white);
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

