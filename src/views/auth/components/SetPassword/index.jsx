import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from 'Components/Navbar';
import Button from 'Components/Button';
import TextInput from 'Components/TextInput';
import PasswordValidationLabel from 'Views/Auth/Components/PasswordValidationLabel';

import useQueryParams from 'Hooks/useQueryParams';
import usePasswordValidation from 'Hooks/usePasswordValidation';

import { createSeed, storePassword } from 'Libs/Wallet';
import { setSeed } from 'Store/Auth';
import styles from './styles.module.css';

function SetPassword() {
  const { values, handleChange, validations } = usePasswordValidation();
  const [step, setStep] = useState(0);
  const params = useQueryParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const action = params.get('action');

  const handleSubmit = async () => {
    if (step === 0) {
      setStep(1);
      return;
    }
    if (action === 'create') {
      const seed = await createSeed({ password: values.password });
      dispatch(setSeed(seed));
    } else {
      storePassword({ password: values.password });
    }
    history.push(`/auth/${action}`);
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
            value={values.password}
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
            value={values.repeatPassword}
            onChange={handleChange}
          />
          <div className={styles.validations}>
            <PasswordValidationLabel
              text="Passwords match"
              isValid={values.password === values.repeatPassword}
            />
          </div>
          <Button
            type={
              values.password === values.repeatPassword ? 'primary' : 'disabled'
            }
            label="Continue"
            onClick={handleSubmit}
          />
        </>
      )}
    </>
  );
}
export default SetPassword;
