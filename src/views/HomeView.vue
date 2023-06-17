<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import HomeCardPost from "@/components/HomeCardPost.vue";

import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const el = ref(null)
const {width, height} = useElementSize(el)
const posts = 12

let hover = false

function changeBackground(event) {
  const modes = ['free', 'prompted', 'story'];
  if (hover) {
    switch (event.target.id) {
      case modes[0]:
        document.documentElement.style.setProperty('background', 'var(--gradient-color-blue)');
        break;
      case modes[1]:
        document.documentElement.style.setProperty('background', 'var(--gradient-color-green)');
        break;
      case modes[2]:
        document.documentElement.style.setProperty('background', 'var(--gradient-color-salmon)');
        break;
      default:
        break;
    }
    hover = false;
  } else {
    document.documentElement.style.setProperty('background', 'var(--color-background)');
  }
}

</script>

<template>
  <NavBarLoggedIn />
  <div class="home">
    <div class="instructions">
      <h1>Create a Narrative</h1>
      <h3>Choose Between Three Writing Modes</h3>
    </div>
    <div class="mode-picker">
    <RouterLink class="no-background" to="/freeWriting">
      <div @mouseenter="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="free">
        <svg class="icon" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="free-svg" fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM35 49C42.732 49 49 42.732 49 35C49 27.268 42.732 21 35 21C27.268 21 21 27.268 21 35C21 42.732 27.268 49 35 49Z" fill="#3060FF"/>
        </svg>
          <button>Free Journal</button>
      </div>
    </RouterLink>
    <RouterLink class="no-background" to="/selectSubmodes">
      <div @mouseenter="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="prompted">
        <svg class="icon" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="prompted-svg" fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM35 49C42.732 49 49 42.732 49 35C49 27.268 42.732 21 35 21C27.268 21 21 27.268 21 35C21 42.732 27.268 49 35 49Z" fill="#CDE82B"/>
        </svg>
        <button>Prompted Journal</button>
      </div>
    </RouterLink>
    <RouterLink class="no-background" to="/selectSubmodes">
    <div @mouseenter="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="story">
        <svg class="icon" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="story-svg" fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM35 49C42.732 49 49 42.732 49 35C49 27.268 42.732 21 35 21C27.268 21 21 27.268 21 35C21 42.732 27.268 49 35 49Z" fill="#FDCAB9"/>
        </svg>
          <button>Story</button>
      </div>
    </RouterLink>
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
    </div>
  </div>
</template>

<style scoped>

.home {
  display: grid;
  grid-template-columns: auto repeat(3, calc(var(--button-width-modes) + var(--gap-width-modes))) auto; /* 5 */
  grid-template-rows: 125px 65px 90px 122px 223px repeat(3, 1fr); /* 8 */
}

.mode-picker {
  grid-area: 4 / 2 / 5 / 5;
  column-gap: var(--gap-width-modes);
  display: flex;
  justify-content: space-between;
}

/* overriding @media (hover: hover) from main.css */
@media (hover: hover) {
  .no-background:hover {
    background-color: inherit;
  }
}

.mode {
  position: relative;
  display: flex;
  justify-content: center;
}

.mode .icon {
  position: absolute;
  top: var(--prompt-circle-top-space);
  height: var(--prompt-circle-size);
}

.mode button {
  border-width: var(--logged-in-border-width);
  border-style: solid;
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: var(--button-width-modes);
  height: var(--button-height-modes);
  background: var(--element-bg);
  font-size: var(--font-size-medium);
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

#free:hover #free-svg,
#prompted:hover #prompted-svg,
#story:hover #story-svg {
  fill-rule: nonzero;
}

.archive {
  position: absolute;
  top: var(--prompt-circle-top-space);
  font-size: var(--font-size-label);
}

.posts {
  position: absolute;
  top: var(--prompt-circle-top-space);
  right: 0;
  font-size: var(--font-size-label);
}

.card-grid {
  position: relative;
  grid-area: 6 / 2 / 14 / 5;
  display: flex;
  column-gap: var(--gap-width-modes);
  row-gap: var(--gap-width-modes);
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 112px;
}

</style>