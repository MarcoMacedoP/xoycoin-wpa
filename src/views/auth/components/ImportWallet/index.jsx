import { Navbar } from '../../../../components/Navbar';
import { TextInput } from '../../../../components/TextInput';

export function ImportWallet() {
  return (
    <>
      <Navbar title="Import Wallet" />
      <TextInput label="Please enter your mnemonic phrase." type="text" />
    </>
  );
}
