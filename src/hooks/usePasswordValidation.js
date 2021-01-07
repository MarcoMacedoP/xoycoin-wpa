import { useMemo, useState } from 'react';

const passwordValidations = {
  hasLowerCase: /(.*[a-z].*)/,
  hasUpperCase: /(.*[A-Z].*)/,
  hasNumber: /(.*[0-9].*)/,
  hasSpecialCharacter: /(.*[!#$%&@?¿¡_ -].*)/,
  eightToThirtyTwoCharacters: /^.{8,32}$/,
};
const usePasswordValidation = () => {
  const [{ password, repeatPassword }, setState] = useState({
    password: '',
    repeatPassword: '',
  });

  const validations = useMemo(() => {
    const entries = Object.entries(passwordValidations).map(([key]) => [
      key,
      passwordValidations[key].test(password),
    ]);
    return Object.fromEntries(entries);
  }, [password]);

  const allValidationsAreSuccess = useMemo(
    () => Object.values(validations).every((result) => result === true),
    [validations]
  );

  const handleChange = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    validations: { ...validations, allSuccess: allValidationsAreSuccess },
    values: {
      password,
      repeatPassword,
    },
  };
};

export default usePasswordValidation;
