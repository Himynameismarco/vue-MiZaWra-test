<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import '@/assets/settings.css';
import { ref, onMounted } from "vue";
import apiClient from '@/services/apiService';
import { themeSwitch } from "@/composables/toggleTheme";

let locale = ref('');
let timer = ref(null);

function updateSettings() {
    let data = {
        lightTheme: document.querySelector('.theme-button-activated').value,
        locale: locale.value.value,
        timer: 900000 //todo add dynamic value
    };

    apiClient.put("/client/settings", data).then(() => {
        sessionStorage.setItem('uploaded', true);
        if (document.querySelector('.theme-button-activated').value == 'true') {
            sessionStorage.setItem('lightTheme', true);
        } else {
            sessionStorage.removeItem('lightTheme');
        }
        sessionStorage.setItem('locale', locale.value.value);
        sessionStorage.setItem('timer', 900000); //todo add dynamic value
        console.log('success');
    });
}

function updateButtonState(evt) {
    themeSwitch.light = !!evt.target.value;
    themeSwitch.manipulateClass();

    document.querySelectorAll('button.theme-button').forEach((button)=>{
        button.classList.toggle('theme-button-activated');
    });
}

onMounted(() => {
    if (!sessionStorage.getItem('lightTheme')) {
        document.querySelector('.theme-button').click();
    }

    for (const element of locale.value) {
        if (element.value === sessionStorage.getItem('locale'))
            element.selected = true;
    }

    timer.value = sessionStorage.getItem('timer');
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
          <button @click="updateButtonState" class="theme-button">Darkmode</button>
          <button @click="updateButtonState" class="theme-button theme-button-activated" value="true">Lightmode</button>
        </div>

        <h3 id="lang">Language</h3>
        <p>Select your preferred language.</p>
        <select ref="locale" class="selectLang" name="Select Language" id="locale">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="ua">Українська</option>
        </select>

      </div>
      <div class="timer">
        <h3>Timer</h3>
        <p>How long do you want your typical writing session to be? We love to write within 15 minutes. Select your own default timer.</p>
        <input ref="timer" type="time" id="timer" placeholder="00:15" class="theme-button">

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