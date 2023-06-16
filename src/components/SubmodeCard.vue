<template>
  <div class="submode">
    <RouterLink  class="no-background" to="/promptedWriting">
      <h2>philosophical prompt</h2>
      <p>Want to try to answer the big questions today?
        Go for this sub-mode!</p>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "SubmodeCard"
}
</script>

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