import {reactive, ref} from "vue";

const theme = 'dark-theme';

export const themeSwitch = reactive({
  dark: false,
  toggleTheme() {
    this.dark = !this.dark;
    this.manipulateClass();
  },
  manipulateClass() {
    if (this.dark) {
      document.documentElement.className = theme;
    } else {
      document.documentElement.classList.remove(theme);
    }
  }
})




