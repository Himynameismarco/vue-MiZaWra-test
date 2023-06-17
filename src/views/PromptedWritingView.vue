<script setup lang="ts">
import NavBarLoggedIn from '../components/NavBarLoggedIn.vue'
</script>

<template>
  <NavBarLoggedIn/>
  <div class="container">
    <div class="prompt">
      <p class="submode-label">philosophical prompt</p>
      <h2>What can you hope for?</h2>
    </div>
    <div class="writing-container">
      <div class="writing-header">
        <h3>Title</h3>
        <h3>04/07/23</h3>
      </div>
      <div class="writing-area">
        <textarea id="narrative" placeholder="Start typing here ..."></textarea>
      </div>
    </div>
    <button class="save">
      Save + Exit
    </button>
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
  width: var(--writing-area-width);
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

.writing-container {
  margin-top: 51px;
  padding: 85px 216px 117px 216px;
  height: 730px;
  width: var(--writing-area-width);
  background: var(--element-bg);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-radius: 30px;
}

.writing-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 65px;
  text-transform: uppercase;
}

.writing-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 834px;
  height: 449px;
}

.writing-area #narrative {
  flex: 1;
}

textarea {
  border: none;
  overflow-y: scroll;
}

.save {
  font-family: "Roboto Mono";
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 65px;
  border-width: var(--logged-in-border-width);
  border-style: solid;
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: 184px;
  height: 48px;
  background: var(--element-bg);
  font-size: 19px;
  letter-spacing: 0.01em;
  padding: 12px 12px;
}
</style>