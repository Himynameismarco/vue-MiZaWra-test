<template>
  <nav>
    <div class="logo">
      <img alt="MiZaWra logo" src="@/assets/logo-mizawra.svg" width="157" />
    </div>
    <!-- <HelloWorld msg="You did it!" /> -->
    <div class="menu">
      <RouterLink to="/register"> <img src="@/assets/Icon-Darkmode.svg"></RouterLink>
      <RouterLink to="/about">Log In</RouterLink>
      <RouterLink to="/register">Sign Up</RouterLink>
    </div>

  </nav>
</template>

<style scoped>


nav {
  grid-area: 1 / 1 / 2 / 12;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav .icon {

}
nav .menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav .logo {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
}


@media (min-width: 1024px) {
}

</style>