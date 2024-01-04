<script setup lang="ts">
    import NavBarLoggedOut from '@/components/NavBarLoggedOut.vue'
</script>

<template>
  <NavBarLoggedOut />
  <div class="wrapper-logged-out">
    <div class="content">
      <div class="heading">
        <h1 class="heading-logged-out">Oops, Looks Like Your Link Expired</h1>
        <p class="heading-logged-out">It seems the confirmation link has timed out. But don't worry, we can get you back on track in no time!</p>
        <p class="heading-logged-out">Just head back to the registration page, register again, and we'll send you a fresh link to complete your sign-up</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>