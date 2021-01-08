import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Text from 'Components/Text';
import Button from 'Components/Button';

import firstImage from 'Assets/tutorial_one.png';
import secondImage from 'Assets/tutorial_two.png';
import thirdImage from 'Assets/tutorial_three.png';
import fourImage from 'Assets/tutorial_four.png';

import styles from './styles.module.css';

const data = [
  {
    image: firstImage,
    title: 'You are member of',
    desc:
      'Remember that Xoy wallet is part of this prestigious group of brands that support you',
  },
  {
    image: secondImage,
    title: 'Multi-chain Wallet',
    desc: 'Generate profits with XoyCoin',
  },
  {
    image: thirdImage,
    title: 'XoyWallet Services',
    desc:
      'With XoyCoin, you can do multiple transactions. Besides, it is pretty easy to buy or send cryptocurrency instantly.',
  },
  {
    image: fourImage,
    title: 'XoyCoin Secure',
    desc:
      'Full control over assets by managing private keys independently. Produced by Xoy Coin security team',
  },
];
function Walkthrough() {
  return (
    <>
      <Carousel
        swipeable
        emulateTouch
        showThumbs={false}
        className={styles.carousel}
        showArrows={false}
        showStatus={false}
        renderIndicator={(onClick, isSelected) => (
          <button
            aria-label="slide indicator"
            type="button"
            onClick={onClick}
            className={isSelected ? styles.indicatorSelected : styles.indicator}
          />
        )}
      >
        {data.map((item) => (
          <section className={styles.item}>
            <img src={item.image} alt="" />
            <Text type="title" position="center">
              {item.title}
            </Text>
            <Text position="center">{item.desc}</Text>
          </section>
        ))}
      </Carousel>
      <Button
        label="Create wallet"
        url="/auth/terms?action=create"
        type="primary"
      />
      <Button
        label="Import wallet"
        url="/auth/terms?action=import"
        type="secondary"
      />
    </>
  );
}

export default Walkthrough;
