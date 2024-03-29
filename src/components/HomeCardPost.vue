// HomeCardPost.vue
<script setup lang="ts">
import { ref, watch, defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '../services/apiService';

const router = useRouter();
const props = defineProps({
  entry: Object
});

function editJournal(event) {
  console.log("props.entry: " + props.entry.id);
  console.log("Submode to pass:", props.entry?.promptDto?.mode);
  router.push({
        name: "edit",
        params: {
            journalId: props.entry.id,
            submode: props.entry.promptDto.mode,
            prompt: props.entry.promptDto.prompt
        }
    })
}

function deleteJournal(event) {
    event.stopPropagation();
    apiClient.delete("/journal", { journalId: props.entry.id }).then((response) => {
        router.go();
    });
}

const preview = ref<string>('');

const modeColor = computed(() => {
  const submode = props.entry?.promptDto?.mode;
  switch (submode) {
    case 'POSITIVE':
    case 'NEUTRAL':
    case 'PHILOSOPHICAL':
    case 'NEGATIVE':
      return 'var(--mode-green)';
    case 'WORD':
    case 'SENTENCE':
    case 'PARAGRAPH':
      return 'var(--mode-salmon)';
    default:
      return 'var(--mode-blue)';
  }
});

const formatBody = (body: string) => {
  // Safeguard against undefined values
  if (!body) return '';

  const maxChars = 120;

  if (body.length > maxChars) {
    body = body.substring(0, maxChars);
    body = body.substring(0, body.lastIndexOf(' '));
    body += '...';
  }

  return body;
};

watch(() => props.entry?.body, (newBody) => {
  // Ensure newBody is defined before processing
  if (newBody) {
    preview.value = formatBody(newBody);
  }
}, { immediate: true });
</script>

<template>
  <div @click="editJournal" class="item" :data-mode-color="modeColor">
    <div class="info">
      <h2>{{ entry.title }}</h2>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="prompted" cx="9.5" cy="9.5" r="9.5" />
      </svg>
    </div>
    <p class="preview">{{preview}}</p>
    <div class="info">
      <h2>{{ entry.postedDate }}</h2>
      <svg @click="deleteJournal" width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.23077 6.96667C5.40418 6.96667 5.57049 7.03339 5.69311 7.15217C5.81573 7.27094 5.88462 7.43203 5.88462 7.6V15.2C5.88462 15.368 5.81573 15.5291 5.69311 15.6478C5.57049 15.7666 5.40418 15.8333 5.23077 15.8333C5.05736 15.8333 4.89105 15.7666 4.76843 15.6478C4.64581 15.5291 4.57692 15.368 4.57692 15.2V7.6C4.57692 7.43203 4.64581 7.27094 4.76843 7.15217C4.89105 7.03339 5.05736 6.96667 5.23077 6.96667ZM8.5 6.96667C8.67341 6.96667 8.83972 7.03339 8.96234 7.15217C9.08496 7.27094 9.15385 7.43203 9.15385 7.6V15.2C9.15385 15.368 9.08496 15.5291 8.96234 15.6478C8.83972 15.7666 8.67341 15.8333 8.5 15.8333C8.32659 15.8333 8.16028 15.7666 8.03766 15.6478C7.91504 15.5291 7.84615 15.368 7.84615 15.2V7.6C7.84615 7.43203 7.91504 7.27094 8.03766 7.15217C8.16028 7.03339 8.32659 6.96667 8.5 6.96667ZM12.4231 7.6C12.4231 7.43203 12.3542 7.27094 12.2316 7.15217C12.109 7.03339 11.9426 6.96667 11.7692 6.96667C11.5958 6.96667 11.4295 7.03339 11.3069 7.15217C11.1843 7.27094 11.1154 7.43203 11.1154 7.6V15.2C11.1154 15.368 11.1843 15.5291 11.3069 15.6478C11.4295 15.7666 11.5958 15.8333 11.7692 15.8333C11.9426 15.8333 12.109 15.7666 12.2316 15.6478C12.3542 15.5291 12.4231 15.368 12.4231 15.2V7.6Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.8C17 4.13594 16.8622 4.45812 16.617 4.69567C16.3717 4.93321 16.0391 5.06667 15.6923 5.06667H15.0385V16.4667C15.0385 17.1385 14.7629 17.7829 14.2724 18.258C13.782 18.7331 13.1167 19 12.4231 19H4.57692C3.88328 19 3.21805 18.7331 2.72757 18.258C2.23709 17.7829 1.96154 17.1385 1.96154 16.4667V5.06667H1.30769C0.960871 5.06667 0.628254 4.93321 0.383014 4.69567C0.137774 4.45812 0 4.13594 0 3.8V2.53333C0 2.19739 0.137774 1.87521 0.383014 1.63766C0.628254 1.40012 0.960871 1.26667 1.30769 1.26667H5.88462C5.88462 0.930726 6.02239 0.608544 6.26763 0.370998C6.51287 0.133452 6.84549 0 7.19231 0H9.80769C10.1545 0 10.4871 0.133452 10.7324 0.370998C10.9776 0.608544 11.1154 0.930726 11.1154 1.26667H15.6923C16.0391 1.26667 16.3717 1.40012 16.617 1.63766C16.8622 1.87521 17 2.19739 17 2.53333V3.8ZM3.42354 5.06667L3.26923 5.1414V16.4667C3.26923 16.8026 3.40701 17.1248 3.65225 17.3623C3.89749 17.5999 4.2301 17.7333 4.57692 17.7333H12.4231C12.7699 17.7333 13.1025 17.5999 13.3478 17.3623C13.593 17.1248 13.7308 16.8026 13.7308 16.4667V5.1414L13.5765 5.06667H3.42354ZM1.30769 3.8V2.53333H15.6923V3.8H1.30769Z" fill="currentColor"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--element-bg);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-radius: 30px;
  padding: 25px 28px;
  width: var(--card-width);
  cursor: pointer;
}

.item[data-mode-color^='var(--mode-green)']:hover .prompted {
  fill: var(--mode-green);
}

.item[data-mode-color^='var(--mode-salmon)']:hover .prompted {
  fill: var(--mode-salmon);
}

.item[data-mode-color^='var(--mode-blue)']:hover .prompted {
  fill: var(--mode-blue);
}

.info:last-of-type {
  margin-top: auto;  /* Push the last .info block to the bottom */
}

.item:hover {
  background: var(--element-bg-hovered);
  border-color: var(--element-border-hovered);
}

.item .info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item svg {
  display: block;
  margin-right: 0;
}

.info svg:hover path {
  fill: var(--element-hovered);
}

.preview {
  font-family: "Roboto Flex", Roboto Monospaced, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  padding: 24px 0 24px 0;
  margin: 0;
  word-break: break-all;
}
</style>
