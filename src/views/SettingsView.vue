<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import {ref} from "vue";

let showMyAcc = ref(true);
let showAppSettings = ref(false);

function switchToMyAcc() {
   showAppSettings.value = false;
   showMyAcc.value = true;
}

function switchToAppSettings() {
    showMyAcc.value = false;
    showAppSettings.value = true;
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
        <h3 id="myAcc" @click="switchToMyAcc">My Account</h3>
        <h3 id="appSettings" @click="switchToAppSettings">App Settings</h3>
        <!-- <h3 id="notifications">Notifications</h3> -->
      </div>
    </div>
    <div class="content">
      <div v-if="showMyAcc" class="personal-information">
        <h3>Personal Information</h3>
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
      </div>
      <div v-if="showMyAcc" class="password-information">
        <h3>Password</h3>
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
      </div>
      <div v-if="showAppSettings" class="theme-lang">
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
      <div v-if="showAppSettings" class="timer">
        <h3>Timer</h3>
        <p>How long do you want your typical writing session to be? We love to write within 15 minutes. Select your own default timer.</p>
        <input type="time" id="timeSetter" placeholder="00:15" class="theme-button">

      </div>

      </div>
    <div class="buttons">
      <button class="save">
        Update Settings
      </button>
      <RouterLink class="cancel" to="/">
      Cancel
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.settings {
  display: grid;
  grid-template-columns: auto repeat(3, calc(var(--button-width-modes) + var(--gap-width-modes))) auto; /* 5 */
  grid-template-rows: var(--vertical-space-to-first-content) 65px auto 128px;
  text-align: center;
}

.setting-header {
  display: flex;
  align-items: center;
  text-transform: none;
  margin: 0;
}

h3 {
  font-size: var(--font-size-smaller-medium);
  font-weight: 500;
  text-transform: uppercase;
}

#lang {
  margin-top: 61px;
}

.tabs h3:hover {
  color: var(--element-hovered);
  cursor: pointer;
}

#settingsInstructions {
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  align-items: center;
  column-gap: 74px;
  text-transform: uppercase;
  margin: 0;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 105px;
  grid-area: 3 / 2 / 4 / 5;
}

.personal-information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.password-information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.theme-buttons {
  display: flex;
  column-gap: 32px;
}

.theme-button {
  background-color: var(--element-bg);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 15px;
  border: 1.5px solid var(--element-border-color-lm, #B2B2B2);
  width: auto;
}

.theme-button:focus {
  outline:none;
}

.theme-button-activated {
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 15px;
  border: 1.5px solid var(--element-border-color-lm, #B2B2B2);
  background: rgba(158, 158, 158, 0.30);
}

.theme-lang {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  text-align: left;
}

.selectLang {
  border-radius: 8px;
  border: 1.5px solid #B2B2B2;
  width: 242px;
  padding: 12px 24px;
}

.selectLang:focus {
  overflow: hidden;
  outline:none;
}

.timer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  text-align: left;
}

#timeSetter {
  filter: none;
}

input {
  width: 432px;
  height: 59px;
}

.buttons {
  display: flex;
  justify-content: center;
  column-gap: 12px;
  grid-area: 5 / 2 / 4 / 5;
  align-items: center;
}

.save:hover,
.cancel:hover {
  color: var(--element-hovered);
}

.save {
  height: 41px;

  margin-top: 40px;
  margin-bottom: 65px;
  padding: 12px 24px;

  background: var(--element-bg);

  border-width: var(--logged-in-border-width);
  border-style: solid;
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;


  font-family: var(--font-family-standard);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
}

.cancel {
  height: 41px;

  color: var(--color-text);
  margin-top: 40px;
  margin-bottom: 65px;
  padding: 12px 24px;
  background: transparent;
  font-family: var(--font-family-standard);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
}
</style>