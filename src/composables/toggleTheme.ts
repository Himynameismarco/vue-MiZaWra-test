import {reactive, ref} from "vue";

const theme = 'dark-theme';
/*export default {
  setup() {
    const dark = ref(false);

    function manipulateClass() {
      console.log("dark in manipulateClass: " + dark.value);
      if (dark.value) {
        document.documentElement.className = theme;
      } else {
        document.documentElement.classList.remove(theme);
      }
    }

    function toggleTheme() {
      dark.value = !dark.value;
      console.log("dark in toggleTheme: " + dark.value);
      manipulateClass();
    }

    return {
      dark,
      toggleTheme
    }
  }
};*/


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




