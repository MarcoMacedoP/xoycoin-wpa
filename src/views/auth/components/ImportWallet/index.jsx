import Navbar from 'Components/Navbar';
import Button from 'Components/Button';
import TextInput from 'Components/TextInput';

function ImportWallet() {
  return (
    <>
      <Navbar title="Import Wallet" />
      <TextInput
        as="textarea"
        placeholder="Use a space between each word."
        label="Please enter your mnemonic phrase."
        type="text"
      />
      <Button url="/auth/loading" type="primary" label="Import" />
    </>
  );
}
export default ImportWallet;
