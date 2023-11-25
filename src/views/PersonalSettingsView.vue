<script setup lang="ts">
import { ref, onMounted } from "vue";
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import '@/assets/settings.css';
import apiClient from '../services/apiService';

let firstname = ref('');
let lastname = ref('');
let email = ref('');

let oldPassword = ref('');
let newPassword = ref('');
let confirmNewPassword = ref('');

function passwordsMatch(): boolean {
  return newPassword.value === confirmNewPassword.value;
}

function updateSettings() {
    let data = {
        firstName: firstname.value,
        lastName: lastname.value
    };

    if (!passwordsMatch()) {
        alert('New password and confirmation do not match!');
        return;
    }

    if (!oldPassword.value && (newPassword.value || confirmNewPassword.value)) {
        alert('To change password you should pass old one.');
        return;
    }

    if (confirmNewPassword.value) {
        data.password = confirmNewPassword.value
    }

    //todo add validation of new password here

    apiClient.put("/client", data)
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        alert('Your old password is wrong, please try again.');
        return;
    });
}

onMounted(() => {
    apiClient.get("/client").then((response) => {
        firstname.value = response.firstName;
        lastname.value = response.lastName;
        email.value = response.email;
    });
});
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
        <input v-model="firstname" type="text" id="firstname" name="firstname">
        <label for="lastname">Last Name</label>
        <input v-model="lastname" type="lastname" id="lastname" name="lastname">
        <label for="email">E-Mail</label>
        <input v-model="email" type="email" id="email" name="email" disabled>
      </div>
      <div class="password-information">
        <h3>Password</h3>
        <label for="password">Current Password</label>
        <input type="password" id="c-password" name="password" v-model="oldPassword">
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