<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import WritingArea from "@/components/WritingArea.vue";
import WritingSaveButton from "@/components/WritingSaveButton.vue";
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container">
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

.save {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 184px;
  height: 48px;

  margin-top: 50px;
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