<script lang="ts">
import apiClient from '../services/apiService';

export default {
  name: "WritingSaveButton.vue",
  props: ['journalId'],
  methods: {
    async save(props) {
        const journalEntry = {
            id: this.journalId,
            promptId: document.getElementById("prompt")?.getAttribute("prompt-id"),
            title: document.getElementById("title").value,
            body: document.getElementById("narrative").value
        };
        console.log(journalEntry);
        await apiClient.post("/journal", journalEntry);
        window.location.href = '/';
    }
  }
}
</script>

<template>
  <button @click="save();" class="save">
    Save + Exit
  </button>
</template>

<style scoped>

.save {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 184px;
  height: 48px;

  margin-top: 40px;
  margin-bottom: 65px;
  padding: 12px 12px;

  background: var(--element-bg);

  border-width: var(--logged-in-border-width);
  border-style: solid;
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  font-family: var(--font-family-standard);
  font-size: 19px;
  letter-spacing: 0.01em;
}
</style>