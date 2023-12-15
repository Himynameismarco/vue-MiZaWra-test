import {reactive} from "vue";
import apiClient from '@/services/apiService';

const theme = 'dark-theme';

export const themeSwitch = reactive({
    light: true,
    toggleTheme() {
        this.light = !this.light;
        if (this.light) {
            apiClient.put("/client/settings", { lightTheme: true });
            sessionStorage.setItem('lightTheme', true);
        } else {
            apiClient.put("/client/settings", { lightTheme: false });
            sessionStorage.removeItem('lightTheme');
        }
        this.manipulateClass();
    },
    manipulateClass() {
        if (!this.light) {
            document.documentElement.className = theme;
        } else {
            document.documentElement.classList.remove(theme);
        }
    }
})




