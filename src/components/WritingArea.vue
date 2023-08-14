<script lang="ts">
import { ref, watch } from 'vue';
export default {
  name: "WritingArea.vue",
  methods: {
    hidePrompt(event) {
      console.log("HI!");
      let prompt = document.getElementById("prompt");
      let container = document.getElementById("container");
      if (prompt) {
        if (prompt.style.display === 'none') {
          prompt.style.display = 'block';
          container.style.marginTop = '44px';
        } else {
          prompt.style.display = 'none';
          container.style.marginTop = '24px';
        }
      }
    }
  },
  setup() {
    let hover = ref(false);
    function changeBoxshadow() {
      let prompt = document.getElementById("prompt");
      if (hover.value) {
        prompt.style.boxShadow = '8px 8px 16px 0px rgba(37, 38, 38, 0.13), 8px 8px 16px 0px rgba(205, 232, 43, 0.30)';
      }
      else {
        prompt.style.boxShadow = 'none';
      }
    }

    watch(hover, changeBoxshadow);

    return { hover, changeBoxshadow };
  },
}
</script>

<template>
  <div class="writing-container">
    <div class="writing-header">
      <textarea class="items">Give Your Text a Title</textarea>
    </div>
    <div class="icons">
      <svg @mouseenter="hover = true" @mouseleave="hover = false" @click="hidePrompt($event);" width="21" height="21" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="prompted-svg" fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM35 49C42.732 49 49 42.732 49 35C49 27.268 42.732 21 35 21C27.268 21 21 27.268 21 35C21 42.732 27.268 49 35 49Z" fill="#CDE82B"/>
      </svg>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_742_18187)">
          <path d="M10.5 4.59375C10.5 4.4197 10.4309 4.25278 10.3078 4.12971C10.1847 4.00664 10.0178 3.9375 9.84375 3.9375C9.6697 3.9375 9.50278 4.00664 9.37971 4.12971C9.25664 4.25278 9.1875 4.4197 9.1875 4.59375V11.8125C9.18754 11.9282 9.21815 12.0418 9.27623 12.1418C9.33432 12.2418 9.41781 12.3247 9.51825 12.3821L14.112 15.0071C14.2628 15.0886 14.4394 15.1079 14.6042 15.0608C14.7689 15.0138 14.9088 14.9042 14.9938 14.7554C15.0788 14.6066 15.1023 14.4305 15.0591 14.2646C15.016 14.0988 14.9097 13.9564 14.763 13.8679L10.5 11.4319V4.59375Z" fill="currentColor"/>
          <path d="M10.5 21C13.2848 21 15.9555 19.8938 17.9246 17.9246C19.8938 15.9555 21 13.2848 21 10.5C21 7.71523 19.8938 5.04451 17.9246 3.07538C15.9555 1.10625 13.2848 0 10.5 0C7.71523 0 5.04451 1.10625 3.07538 3.07538C1.10625 5.04451 0 7.71523 0 10.5C0 13.2848 1.10625 15.9555 3.07538 17.9246C5.04451 19.8938 7.71523 21 10.5 21ZM19.6875 10.5C19.6875 12.9367 18.7195 15.2736 16.9965 16.9965C15.2736 18.7195 12.9367 19.6875 10.5 19.6875C8.06332 19.6875 5.72645 18.7195 4.00346 16.9965C2.28047 15.2736 1.3125 12.9367 1.3125 10.5C1.3125 8.06332 2.28047 5.72645 4.00346 4.00346C5.72645 2.28047 8.06332 1.3125 10.5 1.3125C12.9367 1.3125 15.2736 2.28047 16.9965 4.00346C18.7195 5.72645 19.6875 8.06332 19.6875 10.5Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_742_18187">
            <rect width="21" height="21" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="writing-area">
      <textarea id="narrative" placeholder="Start typing here ..."></textarea>
    </div>
    <div class="writing-footer">
        <h3 class="items">04/07/23</h3>
    </div>
  </div>
</template>

<style scoped>

.writing-container {
  position: relative;
  margin-top: 24px;
  padding: 64px 228px 64px 228px;
  width: var(--writing-container-width);
  background: var(--element-bg);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-radius: 30px;
  min-height: 400px;
  height: auto;
}

.icons {
  position: absolute;
  right: 78px;
  top: 45px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.writing-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 65px;
  text-transform: uppercase;
}

.writing-header .items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  border: none;
  font-size: var(--font-size-smaller-medium);
  color: var(--color-text);
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-family: "Roboto Mono", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  width: 834px;
  height: 20px;
  resize: none;
}


.writing-header .items:focus {
  border: none;
  overflow: hidden;
  outline:none;
}


.writing-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 834px;
  min-height: 291px;
}

.writing-area #narrative {
  flex: 1;
  border: none;
  overflow-y: scroll;
  background-color: transparent;
  line-height: 28px;
  font-size: var(--font-size-medium);
  color: var(--color-text);
  width: 584px;
}

.writing-area #narrative:focus {
  border: none;
  overflow: hidden;
  outline:none;
}

.writing-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}




</style>