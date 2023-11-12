<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
import { useRoute } from 'vue-router';
import apiClient from '../services/apiService';
import { ref } from 'vue';

const route = useRoute();
const title = ref(route.params.title);
let modePrompt = ref('What can you hope for?');
let promptId = ref(null);

if (route.params.submode) {
    apiClient.get("/prompt/random", { mode: route.params.submode }).then((response) => {
        promptId = response.id;
        modePrompt.value = response.prompt;
    });
}
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container" id="container">
    <div v-if="route.params.submode" class="prompt" id="prompt" :prompt-id="promptId">
      <p class="submode-label">{{title}}</p>
      <h2>{{modePrompt}}</h2>
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