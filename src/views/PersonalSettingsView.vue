<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import '@/assets/settings.css';
import {ref} from "vue";

let newPassword = ref('');
let confirmNewPassword = ref('');

function passwordsMatch(): boolean {
  return newPassword.value === confirmNewPassword.value;
}

function updateSettings() {
  if (!passwordsMatch()) {
    alert('New password and confirmation do not match!');
    return;
  }
}

</script>

<template>
  <NavBarLoggedIn/>
  <div class="settings">
    <div class="instructions" id="settingsInstructions">
      <h1 class="setting-header">
        Settings
      </h1>
      <div class="tabs">
        <h3 id="myAcc">My Account</h3>
        <h3 id="appSettings">
          <RouterLink to="/appSettings">App Settings</RouterLink>
        </h3>
        <!-- <h3 id="notifications">Notifications</h3> -->
      </div>
    </div>
    <div class="content">
      <div class="personal-information">
        <h3>Personal Information</h3>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname">
        <label for="lastname">Last Name</label>
        <input type="lastname" id="lastname" name="lastname">
        <label for="username">User Name</label>
        <input type="text" id="username" name="username">
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="password-information">
        <h3>Password</h3>
        <label for="password">Current Password</label>
        <input type="password" id="c-password" name="password">
        <label for="n-password">New Password</label>
        <input type="password" id="n-password" name="n-password" v-model="newPassword">
        <label for="n-password-c">Confirm New Password</label>
        <input type="password" id="n-password-c" name="n-password-c" v-model="confirmNewPassword">
      </div>
    </div>
    <div class="buttons">
      <button class="save" @click="updateSettings">
        Update Settings
      </button>
      <RouterLink class="cancel" to="/">
      Cancel
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>