<script setup lang="ts">
import NavBarLoggedIn from "@/components/NavBarLoggedIn.vue";
import HomeCardPost from "@/components/HomeCardPost.vue";

import {ref, computed, onMounted, onUnmounted} from 'vue'
import { useElementSize } from '@vueuse/core'
import homeService from "@/services/homeService";

const el = ref(null)
const {width, height} = useElementSize(el)

const modes = {
  free: 'var(--gradient-color-blue)',
  prompted: 'var(--gradient-color-green)',
  story: 'var(--gradient-color-salmon)',
};

let hover = ref(false);
let activeMode = ref(''); // Create a ref to store the current active mode.
const client = ref({}); // You can also define a more specific type if known
const countJournals = ref(0);
const journalEntries = ref([]);
const entriesToDisplay = ref(9);
const displayEntries = computed(() => journalEntries.value.slice(0, entriesToDisplay.value));


function generateDefaultEntries(missingCount: number) {
  const defaultEntries = [];
  for (let i = 0; i < missingCount; i++) {
    defaultEntries.push({
      id: `default-${i}`,
      title: 'I Could Be Your Entry',
      body: 'It seems ... you have less than 9 journal entries: time to write! I will disappear as soon as you create more than niii...',
      postedDate: new Date().toLocaleDateString()
    });
  }
  return defaultEntries;
}

const handleScroll = () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
  if (nearBottom) {
    entriesToDisplay.value += 3;
  }
}


const fetchData = async () => {
  try {
    const response = await homeService.fetchHomeData();
    console.log("response from fetchHomeData(): ", response);
    journalEntries.value = response;
    countJournals.value = await homeService.getNumberOfJournals();
    client.value = response.client;

    const missingEntriesCount = 24 - countJournals.value; //TODO: 24 --> 9
    if (missingEntriesCount > 0) {
      const defaultEntries = generateDefaultEntries(missingEntriesCount);
      journalEntries.value.push(...defaultEntries);
    }

    console.log("client.value: ", client.value)
  } catch (error) {
    console.error('Failed to fetch home data:', error);
  }
};


onMounted(() => {
  fetchData();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function changeBackground(event: any) {
  if (hover.value) {
    activeMode.value = event.target.id; // Update the active mode.
    hover.value = false;
  } else {
    activeMode.value = ''; // Reset the active mode.
  }
}

// Compute the background style based on the active mode and hover state. Triggered when any of the dependencies change (here: ref: activeMode)
const backgroundStyle = computed(() => {
  if (activeMode.value) {
    return { background: modes[activeMode.value] };
  }
  return { background: 'var(--color-background)' };
});


function createOrDestroy() {
  let createDestroy = "Create";
  if (Math.random() > 0.9) {
    createDestroy = "Destroy";
  }
  return createDestroy
}

let createDestroy = createOrDestroy();


</script>

<template>
  <div :style="backgroundStyle">

    <NavBarLoggedIn />
    <div class="home">
      <div class="instructions">
        <h1>{{createDestroy}} your Narrative</h1>
        <h3>Choose Between Three Writing Modes</h3>
      </div>
      <div class="mode-picker">
      <RouterLink class="no-background" :to="{ path: '/writing'}">
        <div @mouseenter="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="free">
          <svg class="icon" width="56" height="56" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="free-svg" fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM35 49C42.732 49 49 42.732 49 35C49 27.268 42.732 21 35 21C27.268 21 21 27.268 21 35C21 42.732 27.268 49 35 49Z" fill="#3060FF"/>
          </svg>
            <button>Free Journal</button>
        </div>
      </RouterLink>
      <RouterLink class="no-background" :to="`/selectSubmodes/Prompted Journal`">
        <div @mouseenter="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="prompted">
          <svg class="icon" width="56" height="56" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="prompted-svg" fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM35 49C42.732 49 49 42.732 49 35C49 27.268 42.732 21 35 21C27.268 21 21 27.268 21 35C21 42.732 27.268 49 35 49Z" fill="#CDE82B"/>
          </svg>
          <button>Prompted Journal</button>
        </div>
      </RouterLink>
      <RouterLink class="no-background" :to="`/selectSubmodes/Story`">
        <div @mouseenter="hover = true; changeBackground($event);" @mouseleave="changeBackground($event);" class="mode" id="story">
          <svg class="icon" width="56" height="56" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <p>{{countJournals}} Posts</p>
        </div>
        <HomeCardPost v-for="entry in displayEntries" :key="entry.id" :entry="entry" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.home {
  display: grid;
  grid-template-columns: auto repeat(3, calc(var(--button-width-modes) + var(--gap-width-modes))) auto; /* 5 */
  grid-template-rows: var(--vertical-space-to-first-content) 65px 86px var(--button-height-modes) 151px repeat(3, 1fr); /* 8 */
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
  border-radius: 24px;
  width: var(--button-width-modes);
  height: var(--button-height-modes);
  background: var(--element-bg);
  font-size: var(--font-size-smaller-large);
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-family: "Roboto Mono", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
;
}

#free:hover #free-svg,
#prompted:hover #prompted-svg,
#story:hover #story-svg {
  fill-rule: nonzero;
}

.archive {
  position: absolute;
  top: calc(-32px - 4.8px - var(--font-size-smaller-medium));
}

.archive p {
  font-size: var(--font-size-smaller-medium);
  font-weight: 500;
  letter-spacing: 0.1px;
}

.posts {
  position: absolute;
  top: calc(-32px - 4.8px - var(--font-size-smaller-medium));
  right: 0;
}

.posts p {
  font-size: var(--font-size-smaller-medium);
  font-weight: 500;
  letter-spacing: 0.1px;
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