<script setup lang="ts">
import { ref, defineProps } from 'vue';
import NavBarLoggedIn from '../components/NavBarLoggedIn.vue'
import SubmodeCard from '../components/SubmodeCard.vue'

const { mode } = defineProps(['mode']);

const writingPage = "writing";

console.log("Mode: ", mode);

let modeDescription;
let submodes;
const submodesPrompted = [
  {
    to: {
      name: writingPage,
      params: {
        submode: "PHILOSOPHICAL",
        title: "Philosophical Prompt"
      }
    },
    description: "Want to try to answer the big questions today? Go for this sub-mode!"
  },
  {
    to: {
      name: writingPage,
      params: {
        submode: "POSITIVE",
        title: "Positive Prompt"
      }
    },
    description: "Feel like you need something uplifting today? Check out this sub-mode."
  },
  {
    to: {
      name: writingPage,
      params: {
        submode: "NEUTRAL",
        title: "Neutral Prompt"
      }
    },
    description: "Ready for a few questions you should ask yourself and reflect on? Ok, go!"
  },
  {
    to: {
      name: writingPage,
      params: {
        submode: "NEGATIVE",
        title: "Negative Prompt"
      }
    },
    description: "Feel like tackling a difficult personal moment? This sub-mode is for you."
  }
];

const submodesStory = [
  {
    to: {
      name: writingPage,
      params: {
        submode: "WORD",
        title: "One Word Prompt"
      }
    },
    description: "You guessed it. You get a word, you write a story!"
  },
  {
    to: {
      name: writingPage,
      params: {
        submode: "SENTENCE",
        title: "Group of Words Prompt"
      }
    },
    description: "You get a list of words and each word has to appear in your story."
  },
  {
    to: {
      name: writingPage,
      params: {
        submode: "PARAGRAPH",
        title: "Paragraph Prompt"
      }
    },
    description: "You get the start of a story: Feel free to change it or just continue."
  }
];

if (mode === "Story") {
  modeDescription = "Each sub-mode will give you a prompt to write a brand new story."
  submodes = submodesStory;
} else {
  modeDescription = "Each sub-mode will give you a question to answer in your journal entry."
  submodes = submodesPrompted;
}

function deleteBackground() {
  document.documentElement.style.setProperty('background', 'var(--color-background)');
}
</script>

<template>
  <NavBarLoggedIn/>
  <div class="selectModes">
    <div class="instructions">
      <h1>What Do You Want to Write About?</h1>
      <h3>{{modeDescription}}</h3>
    </div>
    <div class="submode-picker">
      <div class="submode-picker">
        <SubmodeCard
            v-for="(submode, index) in submodes"
            :key="index"
            :submode="submode"
            @click="deleteBackground"
        />
      </div>
    </div>
  </div>
</template>



<style scoped>

.selectModes {
  display: grid;
  grid-template-columns: auto repeat(2, calc(var(--submode-width-modes) + var(--gap-width-modes))) auto; /* 5 */
  grid-template-rows: 125px 65px 120px 440px minmax(201px, auto); /* 8 */
}

.submode-picker {
  grid-area: 4 / 2 / 5 / 5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 26px;
  column-gap: 30px;
}

/* TODO: everything below this comment is going to be deleted, as it is in the component SubmodeCard.vue */

.submode {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-width: var(--logged-in-border-width);
  border-style: solid;
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  width: var(--submode-width-modes);
  height: 194px;
  background: var(--element-bg);
  font-size: var(--font-size-medium);
  letter-spacing: 0.01em;
  padding: 61px 62px 60px 62px;
}

.submode .heading {
  font-weight: 400;
  font-size: var(--font-size-smaller-large);
}

p {
  text-align: center;
}

/* overriding @media (hover: hover) from main.css */
@media (hover: hover) {
  .no-background:hover {
    background-color: inherit;
  }
}

a {
  color: var(--color-text);
}

.submode:hover {
  background: var(--element-bg-hovered);
  border-color: var(--element-border-hovered);
}


</style>