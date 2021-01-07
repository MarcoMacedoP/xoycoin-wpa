import Navbar from 'Components/Navbar';
import TextInput from 'Components/TextInput';

function ImportWallet() {
  return (
    <>
      <Navbar title="Import Wallet" />
      <TextInput label="Please enter your mnemonic phrase." type="text" />
    </>
  );
}
export default ImportWallet;
