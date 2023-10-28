<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
import apiClient from '../services/apiService';

let urlParams = new URLSearchParams(window.location.search);
let mode = urlParams.get('mode');

let modePrompt = await apiClient.get("/journal/prompt", {mode: mode});
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container" id="container">
    <div class="prompt" id="prompt">
      <p class="submode-label">{{ selectedMode }}</p>
      <h2>{{ modePrompt }}</h2>
    </div>
    <WritingArea/>
    <WritingSaveButton/>
  </div>
</template>



<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.prompt {
  margin-top: 64px;
  width: var(--writing-container-width);
  height: var(--prompt-height);
  background: var(--element-bg);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  font-size: var(--font-size-smaller-medium);
  border-style: solid;
  border-radius: 24px;
  padding: 27px;
}

.submode-label {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
}
</style>