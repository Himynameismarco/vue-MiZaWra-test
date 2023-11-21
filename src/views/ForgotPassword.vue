<script setup lang="ts">
    import { ref } from "vue";
    import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'
    import apiClient from '../services/apiService';

    let email = ref(null);

    function resetPassword() {
        if(email && email !== '') {
            apiClient.post("/forgetPassword?email" + email);
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
        <h1 class="heading-logged-out">Forgot Password? </h1>
        <h3 class="heading-logged-out">Enter your email address</h3>
      </div>
      <form class="forms" action="register" method="post">
        <label for="email">E-Mail</label>
        <input ref="email" type="email" id="email" name="email">
        <button @click="resetPassword" class="logged-out-button">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>