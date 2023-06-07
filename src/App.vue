<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import {onMounted} from "vue";
import { themeSwitch } from "@/composables/toggleTheme";

onMounted(() => {
  console.log("dark: " + themeSwitch.dark);
  themeSwitch.manipulateClass();
})
</script>

<template>

  <RouterView />
</template>

<style scoped>
@font-face {
  font-family: "Roboto Flex";
  src: local("Roboto Flex"),
  url(src/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf) format("truetype");
}
</style>
