import {useDark, useToggle} from "@vueuse/core";
import {reactive} from "vue";

const theme = 'dark-theme'

export const themeSwitch = reactive({
  dark: false,
  toggleTheme() {
    this.dark = !this.dark;
    if (this.dark) {
      document.documentElement.classList.remove(theme)
    } else {
      document.documentElement.className = theme;
    }
  }
})
