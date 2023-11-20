<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import NavBarLoggedOut from '../components/NavBarLoggedOut.vue'
    import apiClient from '../services/apiService';

    const route = useRoute();
    const router = useRouter();

    apiClient.post("/register/activate?token=" + route.query.token).catch((error) => {
        if (error.response.status === 400) {
            router.push("tokenRegenerate");
        } else {
            router.push("login");
        }
    });
</script>

<template>
  <NavBarLoggedOut />
  <div class="wrapper-logged-out">
    <div class="content">
      <div class="heading">
        <h1 class="heading-logged-out">Welcome to MiZaWra</h1>
        <p class="heading-logged-out">Congratulations, you're all set! We're happy to have you on board.</p>
        <p class="heading-logged-out">Without further delay: Let’s start writing!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>