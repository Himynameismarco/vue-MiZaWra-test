import { useRoute } from 'vue-router';
import { themeSwitch } from "@/composables/toggleTheme";
import apiClient from '@/services/apiService';

let isGlobalSetupExecuted = false;

export default {
    created() {
        const route = useRoute();
        const pagesToIgnore = ['login', 'register', 'registerComplete', 'registerActivate', 'tokenRegenerate',
                'forgotPassword', 'forgotPasswordEmailSent', 'setNewPassword', 'forgotPasswordSuccess'];

        if (!isGlobalSetupExecuted && route.name) {
            themeSwitch.light=!!sessionStorage.getItem('lightTheme');
            themeSwitch.manipulateClass();

            if (!sessionStorage.getItem('uploaded') && !pagesToIgnore.includes(route.name)) {
                apiClient.get("/client/settings").then((response) => {
                    sessionStorage.setItem('uploaded', true);
                    if (response.lightTheme == 'true') {
                            sessionStorage.setItem('lightTheme', true);
                    } else {
                            sessionStorage.removeItem('lightTheme');
                    }
                    sessionStorage.setItem('locale', response.locale);
                    sessionStorage.setItem('timer', response.timer);
                });
            }
            isGlobalSetupExecuted = true;
        }
    }
};