
<script lang="ts">
export default {
  name: "SubmodeCard",
  props: {
    submode: Object
  }
}
</script>



<template>
  <div>
    <div class="submode">
      <RouterLink class="no-background" :to="submode.to">
        <h2 class="heading">{{ submode.title }}</h2>
        <p>{{ submode.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>



<style scoped>

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