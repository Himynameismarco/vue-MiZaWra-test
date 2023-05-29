<script setup lang="ts">
import NavBarLoggedIn from '../components/NavBarLoggedIn.vue'
import HomeCardPost from '../components/HomeCardPost.vue'


import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const el = ref(null)
const {width, height} = useElementSize(el)
const posts = 12

let count = ref(0)
let hover = false

function changeBackground(event) {
  if (hover) {
    let bg = 'linear-gradient(0deg, rgba(205,232,43,1) 0%, rgba(251,251,251,1) 80%)'
    document.body.style.setProperty('background', bg);
    hover = false;
  } else {
    document.body.style.setProperty('background', 'var(--color-background)');
  }
}


</script>

<template>
  <NavBarLoggedIn />
  <div class="instructions">
    <h1>Create a Narrative</h1>
    <h3>Choose Between Three Writing Modes</h3>
  </div>
  <div class="mode-picker">
    <div @mouseover="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="free">
      <img class="icon" src="@/assets/prompt-circle-green.svg">
      <button>Free Journal</button>
    </div>
    <div class="mode" id="prompted">
      <img class="icon" src="@/assets/prompt-circle-blue.svg">
      <button>Prompted Journal</button>
    </div>
    <div class="mode" id="story">
      <img class="icon" src="@/assets/prompt-circle-nude.svg">
      <button>Story</button>
    </div>
  </div>
  <div class="card-grid">
    <div class="archive">
      <p>Archive:</p>
    </div>
    <div class="posts">
      <p>{{posts}} Posts</p>
    </div>
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
    <HomeCardPost />
  </div>
</template>

<style scoped>

.mode-picker {
  grid-area: 5 / 2 / 6 / 11;
  display: flex;
  justify-content: space-between;
}

.mode {
  position: relative;
  display: flex;
  justify-content: center;
  background: var(--element-bg-lm);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: var(--button-width-modes);
  height: var(--button-height-modes);
}

.mode .icon {
  position: absolute;
  top: var(--prompt-circle-top-space);
}

button {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-size: var(--font-size-medium);
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.archive {
  position: absolute;
  top: var(--prompt-circle-top-space);
  font-size: var(--font-size-label);
}

.posts {
  position: absolute;
  top: var(--prompt-circle-top-space);
  right: 0px;
  font-size: var(--font-size-label);
}

.card-grid {
  position: relative;
  grid-area: 7 / 2 / 15 / 11;
  display: flex;
  row-gap: 3vh;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>