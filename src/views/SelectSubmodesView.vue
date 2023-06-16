<script setup lang="ts">
import NavBarLoggedIn from '../components/NavBarLoggedIn.vue'
import SubmodeCard from '../components/SubmodeCard.vue'

function deleteBackground() {
  document.documentElement.style.setProperty('background', 'var(--color-background)');
}
</script>

<template>
  <NavBarLoggedIn/>
  <div class="selectModes">
    <div class="instructions">
      <h1>What Do You Want to Write About?</h1>
      <h3>Each sub-mode will give you a question to answer in your journal entry.</h3>
    </div>
    <div class="submode-picker">
      <SubmodeCard @click="deleteBackground"/>
      <RouterLink class="no-background" to="/selectSubmodes">
        <div class="submode">
          <h2>positive prompt</h2>
          <p>Feel like you need something uplifting today?
            Check out this sub-mode.</p>
        </div>
      </RouterLink>
      <div class="submode">
        <RouterLink class="no-background" to="/selectSubmodes">
          <h2>neutral prompt</h2>
          <p>Feel like you need something uplifting today?
            Check out this sub-mode.</p>
        </RouterLink>
      </div>
      <div class="submode">
        <RouterLink class="no-background" to="/selectSubmodes">
          <h2>negative prompt</h2>
          <p>Feel like tackling a  difficult personal moment today? This sub-mode could be right for you.</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>



<style scoped>

.selectModes {
  display: grid;
  grid-template-columns: auto repeat(3, calc(var(--button-width-modes) + var(--gap-width-modes))) auto; /* 5 */
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
  border-radius: 30px;
  width: 510px;
  height: 194px;
  background: var(--element-bg);
  font-size: var(--font-size-medium);
  letter-spacing: 0.01em;
  padding: 61px 62px 60px 62px;
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


</style>