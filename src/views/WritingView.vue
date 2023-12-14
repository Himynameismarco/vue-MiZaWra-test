<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
import { useRoute } from 'vue-router';
import apiClient from '../services/apiService';
import {ref, computed, createCommentVNode, onMounted, defineProps} from 'vue';

const route = useRoute();
onMounted(() => {
  console.log("promptId: " + route.params.id);
  console.log("submode: " + route.params.submode);
});
const submode = ref(route.params.submode);
const hasSubmode = computed(() => !!route.params.submode); // Check if submode exists
const title = computed(() => getFullSubmodeName(submode.value));
let modePrompt = ref('What can you hope for?');
let promptId = ref(null);

const submodeFullName = {
  'POSITIVE': 'Positive Prompt',
  'NEUTRAL': 'Neutrale Prompt',
  'PHILOSOPHICAL': 'Philosophical Prompt',
  'NEGATIVE': 'Negative Prompt',
  'WORD': 'One Word Prompt',
  'SENTENCE': 'Group of Words Prompt',
  'PARAGRAPH': 'Paragraph Prompt',
};

function getFullSubmodeName(submodeTitle) {
  console.log("submodeTitle: " + submodeTitle);
  return submodeFullName[submodeTitle] || 'Unknown Submode';
}

if (hasSubmode.value) {
    apiClient.get("/prompt/random", { mode: route.params.submode }).then((response) => {
        promptId.value = response.id;
        modePrompt.value = response.prompt;
    });
}
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container" id="container">
    <div v-if="hasSubmode" class="prompt" id="prompt" :prompt-id="promptId.value">
      <p class="submode-label">{{title}}</p>
      <h2>{{modePrompt}}</h2>
    </div>
    <WritingArea/>
    <WritingSaveButton :journalId="route.params.journalId"/>
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