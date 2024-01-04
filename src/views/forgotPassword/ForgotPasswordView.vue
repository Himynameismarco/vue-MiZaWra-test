<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from 'vue-router';
    import NavBarLoggedOut from '@/components/NavBarLoggedOut.vue'
    import apiClient from '@/services/apiService';

    const email = ref('');
    const router = useRouter();

    async function resetPassword() {
        if(email && email !== '') {
            await apiClient.post("/forgetPassword?email=" + email.value)
            .then(() => {
                router.push("/forgotPassword/emailSent")
            }).catch((error) => {
                if (error.response.status == 404) {
                    document.querySelector("#err-incorrect-pw").style.display = "block";
                }
            });
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
      <div class="forms">
        <label for="email">E-Mail</label>
        <input v-model="email" type="email" id="email" name="email">
        <div class="sub-password">
          <div id="err-incorrect">Seems like E-Mail is wrong...</div>
        </div>
        <button @click="resetPassword" class="logged-out-button">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

#err-incorrect {
  color: var(--orange);
  margin-right: 20px;
  display: none;
}

</style>