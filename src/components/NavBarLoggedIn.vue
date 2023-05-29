<template>
  <nav>
    <div class="logo">
      <img alt="MiZaWra logo" src="@/assets/logo-mizawra.svg" width="157" />
    </div>
    <!-- <HelloWorld msg="You did it!" /> -->
    <div class="menu">
      <RouterLink to="/" class="icon"><img src="@/assets/Icon-Home.svg"></RouterLink>
      <RouterLink to="/register" class="icon"> <img src="@/assets/Icon-Darkmode.svg"></RouterLink>
      <RouterLink to="/about">Settings</RouterLink>
      <RouterLink to="/about">Log Out</RouterLink>
    </div>

  </nav>
</template>

<style scoped>




</style>