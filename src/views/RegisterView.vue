<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import NavBarLoggedOut from '../components/NavBarLoggedOut.vue';
import apiClient from '../services/apiService';
import {usePasswordValidation} from "@/composables/usePasswordValidation";

const { password, passwordConfirmation, passwordError, validatePassword } = usePasswordValidation();


let form = ref(null);
const router = useRouter();

function register(event) {
    event.preventDefault();

    if (!validatePassword()) {
      return;
    }

    const data = {
        firstName: form.value.firstName.value,
        lastName: form.value.lastName.value,
        email: form.value.email.value,
        password: form.value.password.value
    }

    apiClient.post("/register", data).then(() => {
        router.push("registerComplete");
    });
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
        <form ref="form" class="forms" @submit.prevent="register" method="post">
          <label for="firstName">First name</label>
          <input type="text" id="firstName" name="firstName">
          <label for="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName">
          <label for="email">E-Mail</label>
          <input type="email" id="email" name="email">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" v-model="password">
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

