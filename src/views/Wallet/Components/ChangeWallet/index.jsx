import { ComposedLayout as Layout } from 'Components/Layout';

import Contact from 'Components/Contact';
import WalletIcon from 'Components/WalletIcon';

function ChangeWallet() {
  const headerRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      width="24x"
      height="24px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
  return (
    <Layout title="Select your wallet" headerRight={headerRight}>
      <Contact
        desc="0xf3242defwfgwe23423fdfs2342342"
        title="Main address"
        icon={() => <WalletIcon fill="var(--color-primary)" />}
      />
    </Layout>
  );
}
export default ChangeWallet;
