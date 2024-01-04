<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import NavBarLoggedOut from '@/components/NavBarLoggedOut.vue'
import { usePasswordValidation } from '@/composables/usePasswordValidation';
import apiClient from '@/services/apiService';

const { password, passwordConfirmation, passwordError, validatePassword } = usePasswordValidation();
const route = useRoute();
const router = useRouter();

function handleSubmit() {
    if (validatePassword()) {
        apiClient.post("/savePassword", {
            password: password.value,
            tokenId: route.query.token
        }).then(()=>{
            router.push("/forgotPassword/success");
        });
    }
}

</script>

<template>
  <NavBarLoggedOut />
  <div class="wrapper-logged-out">
    <div class="content">
      <div class="heading">
        <h1 class="heading-logged-out">Set New Password</h1>
        <h3 class="heading-logged-out">It must be at least 8 characters long, contain at least three digits and a special character.</h3>
      </div>
      <form class="forms" @submit.prevent="handleSubmit">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password">
        <label for="password">Password Confirmation</label>
        <input type="password" id="passwordConfirmation" name="passwordConfirmation" v-model="passwordConfirmation">
        <p v-if="passwordError">{{ passwordError }}</p>
        <button class="logged-out-button">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>