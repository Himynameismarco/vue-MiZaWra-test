<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import '@/assets/settings.css';
import {ref} from "vue";

function updateSettings() {

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
        <h3 id="myAcc">
          <RouterLink to="/personalSettings">My Account</RouterLink>
        </h3>
        <h3 id="appSettings">App Settings</h3>
        <!-- <h3 id="notifications">Notifications</h3> -->
      </div>
    </div>
    <div class="content">
      <div class="theme-lang">
        <h3>Theme</h3>
        <p>Lightmode is our default mode. Do you prefer Darkmode? Select your preferred theme and it will be set automatically after logging in.</p>
        <div class="theme-buttons">
          <button class="theme-button">Darkmode</button>
          <button class="theme-button-activated">Lightmode</button>
        </div>

        <h3 id="lang">Language</h3>
        <p>Select your preferred language.</p>
        <select class="selectLang" name="Select Language" id="languageSelector">
          <option value="English">English</option>
          <option value="German">Deutsch</option>
          <option value="Ukranian">Українська</option>
        </select>

      </div>
      <div class="timer">
        <h3>Timer</h3>
        <p>How long do you want your typical writing session to be? We love to write within 15 minutes. Select your own default timer.</p>
        <input type="time" id="timeSetter" placeholder="00:15" class="theme-button">

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