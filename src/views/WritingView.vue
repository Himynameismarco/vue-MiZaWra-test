<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
import { useRoute } from 'vue-router';
import apiClient from '../services/apiService';
import {ref, reactive, computed, createCommentVNode, onMounted, defineProps} from 'vue';

const route = useRoute();
const submode = ref(null);
const modePrompt = ref('What can you hope for?');
const promptId = reactive({ value: null });

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

const hasSubmode = computed(() => !!submode.value);
const fullSubmode = computed(() => getFullSubmodeName(submode.value));
const narrative = ref(null);
const title = ref(null);

async function fetchData() {
  if (route.params.journalId) {
    const response = await apiClient.get("/journal", { journalId: route.params.journalId });
    title.value = response.title;
    narrative.value = response.body;
    submode.value = response.promptDto.mode;
    modePrompt.value = response.promptDto.prompt;
  } else if (route.params.submode) {
    const response = await apiClient.get("/prompt/random", { mode: route.params.submode });
    promptId.value = response.id;
    modePrompt.value = response.prompt;
    submode.value = response.mode;
  }
}

onMounted(() => {
  fetchData();
});

</script>

<template>
  <NavBarLoggedIn/>
  <div class="container" id="container">
    <div v-if="hasSubmode" class="prompt" id="prompt" :prompt-id="promptId">
      <p class="submode-label">{{ fullSubmode }}</p>
      <h2>{{modePrompt}}</h2>
    </div>
    <WritingArea :narrative="narrative" :title="title" @update:title="title = $event" @update:narrative="narrative = $event"/>
    <WritingSaveButton :title="title"
                       :narrative="narrative"
                       :promptId="promptId.value"
                       :journalId="route.params.journalId"/>
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