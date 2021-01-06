import { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../../../../components/Navbar';
import { Button } from '../../../../components/Button';
import { TextInput } from '../../../../components/TextInput';
import { useQueryParams } from '../../../../hooks/useQueryParams';
import { PasswordValidationLabel } from '../PasswordValidationLabel';
import styles from './styles.module.css';

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
    password,
    repeatPassword,
    setState,
  };
};

export function SetPassword() {
  const {
    password,
    repeatPassword,
    handleChange,
    validations,
  } = usePasswordValidation();
  const [step, setStep] = useState(0);
  const params = useQueryParams();
  const history = useHistory();
  const action = params.get('action');

  const handleSubmit = () => {
    if (step === 0) {
      setStep(1);
    } else {
      history.push(`/auth/${action}`);
    }
  };

  return (
    <>
      <Navbar
        title={`${action.charAt(0).toUpperCase()}${action.slice(1)} Wallet`}
      />
      {step === 0 ? (
        <>
          <TextInput
            label="Please set a security password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <div className={styles.validations}>
            <PasswordValidationLabel
              text="A lower case letter"
              isValid={validations.hasLowerCase}
            />
            <PasswordValidationLabel
              text="An Uppercase letter"
              isValid={validations.hasUpperCase}
            />
            <PasswordValidationLabel
              text="A number"
              isValid={validations.hasNumber}
            />
            <PasswordValidationLabel
              text="8~32 characters"
              isValid={validations.eightToThirtyTwoCharacters}
            />
            <PasswordValidationLabel
              text="A special character (!#$%&@?¿¡)"
              isValid={validations.hasSpecialCharacter}
            />
          </div>
          <Button
            type={validations.allSuccess ? 'primary' : 'disabled'}
            label="Continue"
            onClick={handleSubmit}
          />
        </>
      ) : (
        <>
          <TextInput
            label="Repeat password"
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={handleChange}
          />
          <div className={styles.validations}>
            <PasswordValidationLabel
              text="Passwords match"
              isValid={password === repeatPassword}
            />
          </div>
          <Button
            type={password === repeatPassword ? 'primary' : 'disabled'}
            label="Continue"
            onClick={handleSubmit}
          />
        </>
      )}
    </>
  );
}
