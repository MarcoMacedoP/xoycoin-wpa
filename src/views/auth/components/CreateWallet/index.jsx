import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Text from 'Components/Text';
import ErrorLabel from 'Components/ErrorLabel';
import Button from 'Components/Button';
import Navbar from 'Components/Navbar';
import TextInput from 'Components/TextInput';

import useStatus from 'Hooks/useStatus';

import webcamImage from 'Assets/webcam.png';
import backupImage from 'Assets/backup.png';

import styles from './styles.module.css';

function CreateWallet() {
  const match = useRouteMatch();
  const { seed } = useSelector((state) => ({
    seed: state.auth.seed.split(' '),
  }));

  console.log({ seed });

  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${match.path}/warning`}>
          <Warning path={match.path} />
        </Route>
        <Route path={`${match.path}/backup-intro`}>
          <BackupIntroduction path={match.path} seed={seed} />
        </Route>
        <Route path={`${match.path}/backup`}>
          <Backup path={match.path} seed={seed} />
        </Route>

        <Route path={match.path}>
          <Introduction path={match.path} />
        </Route>
      </Switch>
    </>
  );
}
function Introduction({ path }) {
  return (
    <>
      <section className={styles.introduction}>
        <img src={backupImage} alt="" />
        <Text type="title" position="center">
          BACKUP MNEMONIC PHRASES
        </Text>
        <Text position="center" type="small">
          We&apos;re about to create an XoyCoin wallet for you.
          <br />
          The decentralized XoyCoin Wallet can manage multiple crypto wallets by
          securing it with a single set of mnemonic phrases.
        </Text>
      </section>
      <Button label="Start backup" type="primary" url={`${path}/warning`} />
    </>
  );
}
Introduction.propTypes = { path: PropTypes.string.isRequired };

function Warning({ path }) {
  return (
    <>
      <section className={styles.warning}>
        <img src={webcamImage} alt="" />
        <Text position="center">
          <strong>
            The Mnemonic Phrase can give full control over your assets.
            <br />
            <br />
            Users should be aware of the following matters:
          </strong>
        </Text>
        <Text type="small" position="center">
          Never take screenshots. Please pay close attention to cameras around
          and avoids them.
          <br />
          <br />
          Write the Mnemonic Phrase on paper and keep it isolated from the
          internet. Prohibit the disclosure or publicity of mnemonics in any
          form or method.
          <br />
          <br />
          Please make sure to keep a paper copy of your mnemonic phrase. XoyCoin
          is not liable for the loss of digital assets resulting from the loss,
          damage, or other loss of control over the paper copy of the mnemonic
          phrase.
        </Text>
      </section>
      <Button label="Continue" type="primary" url={`${path}/backup-intro`} />
    </>
  );
}
Warning.propTypes = { path: PropTypes.string.isRequired };

function BackupIntroduction({ path, seed }) {
  return (
    <>
      <section className={styles.backupIntro}>
        <Text type="title">BACKUP MNEMONIC PHRASES</Text>
        <Text>
          Before continuing, please write and save the following 12 mnemonic
          phrases in the same order shown. We&apos;re going to verify the
          mnemonic phrase in the next step
        </Text>
        <div className={styles.phraseList}>
          {seed.map((phrase) => (
            <PhraseWordButton key={phrase}>{phrase}</PhraseWordButton>
          ))}
        </div>
      </section>
      <Button label="Continue" type="primary" url={`${path}/backup`} />
    </>
  );
}

BackupIntroduction.propTypes = {
  path: PropTypes.string.isRequired,
  seed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Backup({ seed }) {
  const [text, setText] = useState('');
  const history = useHistory();
  const status = useStatus();
  const shuffleSeed = useMemo(() => {
    const tempSeed = [...seed];
    const n = tempSeed.length;
    const tempArr = [];

    for (let index = 0; index < n - 1; index++) {
      tempArr.push(
        tempSeed.splice(Math.floor(Math.random() * tempSeed.length), 1)[0]
      );
    }
    tempArr.push(tempSeed[0]);
    return tempArr;
  }, [seed]);

  const canSubmit = text.split(' ').length === seed.length;

  const handleSelect = (phrase) => {
    const values = text.split(' ');
    values.push(phrase);
    const updatedValues = values.filter((value) => value.length > 0);
    const updatedText = updatedValues.toString().replace(/,/g, ' ');
    setText(updatedText);
  };

  const handleUnSelect = (phrase) => {
    const updatedText = text.replace(phrase, '');
    if (status.current !== 'initial') {
      status.change({ value: 'initial' });
    }
    setText(updatedText);
  };
  const isPhraseInText = (phrase) => text.search(phrase) !== -1;

  const onSeedPress = (phrase) => {
    if (isPhraseInText(phrase)) handleUnSelect(phrase);
    else handleSelect(phrase);
  };

  const handleSubmit = () => {
    let hasError = false;
    const inputSeed = text.split(' ');
    inputSeed.forEach((seedValue, index) => {
      const hasDiferentValues = seed[index] !== seedValue;
      if (hasDiferentValues) {
        hasError = true;
      }
    });
    if (!hasError) {
      status.change({ value: 'success' });
      history.push('/auth/loading');
    } else {
      status.change({ value: 'error', payload: 'Orden incorrecto' });
    }
  };

  return (
    <>
      <section className={styles.backup}>
        <Text type="title">BACKUP MNEMONIC PHRASES</Text>
        <TextInput
          as="textarea"
          placeholder={text}
          value=""
          onChange={() => {}}
          name="backup"
          label="Please enter the 12 mnemonic phrases in the correct order."
        />
        {status.current === 'error' && (
          <ErrorLabel>{status.payload}</ErrorLabel>
        )}
        <div className={styles.phraseList}>
          {shuffleSeed.map((phrase) => (
            <PhraseWordButton
              key={phrase}
              onSelect={() => onSeedPress(phrase)}
              isSelected={isPhraseInText(phrase)}
            >
              {phrase}
            </PhraseWordButton>
          ))}
        </div>
      </section>
      <Button
        label="Continue"
        type={canSubmit ? 'primary' : 'disabled'}
        onClick={handleSubmit}
      />
    </>
  );
}
Backup.propTypes = {
  seed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function PhraseWordButton({ children, isSelected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      type="button"
      className={styles.phrase}
      style={{
        color: isSelected ? 'var(--color-gray)' : 'var(--color-primary)',
      }}
    >
      {children}
    </button>
  );
}
PhraseWordButton.defaultProps = {
  isSelected: false,
  onSelect: () => {},
};
PhraseWordButton.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default CreateWallet;
