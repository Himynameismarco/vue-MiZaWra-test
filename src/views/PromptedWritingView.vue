<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container">
    <div class="prompt">
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
  margin-top: 86px;
  width: var(--writing-container-width);
  height: var(--prompt-height);
  background: var(--element-bg);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-radius: 30px;
  padding: 2vh 2vw 2vh 2vw;
}

.submode-label {
  text-transform: uppercase;
  text-align: center;
}
</style>