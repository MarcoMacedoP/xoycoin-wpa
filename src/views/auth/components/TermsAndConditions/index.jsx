import Text from 'Components/Text';
import Navbar from 'Components/Navbar';
import Button from 'Components/Button';

import useQueryParams from 'Hooks/useQueryParams';

import { TERMS_AND_CONDITIONS } from 'Constants';

import styles from './styles.module.css';

function TermsAndConditions() {
  const params = useQueryParams();

  return (
    <>
      <Navbar title="User service agreement" />
      <Text type="title">Dear user:</Text>
      <Text>
        <span
          className={styles.termsWrapper}
          dangerouslySetInnerHTML={{ __html: TERMS_AND_CONDITIONS }}
        />
      </Text>
      <div className={styles.acceptTerms}>
        <input type="radio" id="terms" />
        <label htmlFor="terms"> I agree with the terms above</label>
      </div>
      <Button
        label="Confirm"
        type="primary"
        url={`/auth/password-set?action=${params.get('action')}`}
      />
    </>
  );
}
export default TermsAndConditions;
