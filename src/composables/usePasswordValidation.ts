import { ref, computed } from 'vue';

export function usePasswordValidation() {
  const password = ref('');
  const passwordConfirmation = ref('');
  const passwordError = ref('');

  const isValidPassword = computed(() => {
    const lengthCheck = password.value.length >= 8;
    const digitCheck = (password.value.match(/\d/g) || []).length >= 3;
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

    return lengthCheck && digitCheck && specialCharCheck;
  });

  function validatePassword() {
    if (!isValidPassword.value) {
      passwordError.value = 'Password must be at least 8 characters long, contain at least three digits and a special character.';
      return false;
    }

    if (password.value !== passwordConfirmation.value) {
      passwordError.value = 'Passwords do not match.';
      return false;
    }

    passwordError.value = '';
    return true;
  }

  return {
    password,
    passwordConfirmation,
    passwordError,
    validatePassword,
  };
}
