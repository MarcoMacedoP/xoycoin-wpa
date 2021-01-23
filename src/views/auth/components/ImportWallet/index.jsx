import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from 'Components/Navbar';
import Button from 'Components/Button';
import TextInput from 'Components/TextInput';

import { importWalletFromSeed } from 'Libs/Wallet';

const validateSeed = /([a-zA-Z]*\s){11}[a-zA-Z]{2,}/;

function ImportWallet() {
  const [seed, setSeed] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    importWalletFromSeed({ seed });
    history.push('/auth/loading');
  };

  return (
    <>
      <Navbar title="Import Wallet" />
      <TextInput
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        as="textarea"
        placeholder="Use a space between each word."
        label="Please enter your mnemonic phrase."
        type="text"
      />
      <Button
        onClick={handleSubmit}
        type={validateSeed.test(seed) ? 'primary' : 'disabled'}
        label="Import"
      />
    </>
  );
}
export default ImportWallet;
