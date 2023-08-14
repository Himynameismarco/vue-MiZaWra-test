<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import {onMounted} from "vue";
import { themeSwitch } from "@/composables/toggleTheme";

onMounted(() => {
  console.log("dark: " + themeSwitch.dark);
  themeSwitch.manipulateClass();
})
</script>

<template>

  <RouterView />
</template>ls

<style scoped>
@font-face {
  font-family: "Roboto Flex";
  src: local("Roboto Flex"),
  url(src/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto Mono";
  src: local("Roboto Mono"),
  url(src/fonts/RobotoMono-VariableFont_wght.ttf) format("truetype");
}
</style>
