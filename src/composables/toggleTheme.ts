import {reactive, ref} from "vue";

const theme = 'dark-theme';

export const themeSwitch = reactive({
  dark: false,
  toggleTheme() {
    this.dark = !this.dark;
    console.log("dark in toggleTheme: " + this.dark);
    this.manipulateClass();
  },
  manipulateClass() {
    console.log("dark in manipulateClass: " + this.dark);
    if (this.dark) {
      document.documentElement.className = theme;
    } else {
      document.documentElement.classList.remove(theme);
    }
  }
})




