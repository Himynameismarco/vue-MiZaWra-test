<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container" id="container">
    <div class="prompt" id="prompt">
      <p class="submode-label">philosophical prompt</p>
      <h2>What can you hope for?</h2>
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