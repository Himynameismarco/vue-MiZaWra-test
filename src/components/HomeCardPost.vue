<template>
  <div class="item">
    <h2>Idea of a System</h2>
    <p class="preview">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my...</p>
    <div class="info">
      <p class="date">05/14/23</p>
      <RouterLink to="/" class="icon"> <img src="@/assets/delete-icon.svg"></RouterLink>
    </div>
  </div>
</template>

<style scoped>

.item {
  display: flex;
  flex-direction: column;
  background: var(--element-bg);
  border-width: var(--logged-in-border-width);
  border-color: var(--element-border-color-lm);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-radius: 30px;
  padding: 2vh 2vw 2vh 2vw;
  width: var(--card-width);
}

.item .info {
  display: flex;
  justify-content: space-between;
}

.preview {
  font-family: "Roboto Flex", Roboto Monospaced, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  padding: 1vh 0vw 1vh 0vw;
}

.date {
  font-weight: bold;
}

</style>
