import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.css';
import { Carousel } from 'react-responsive-carousel';
import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';

import firstImage from '../../../../assets/tutorial_one.png';
import secondImage from '../../../../assets/tutorial_two.png';
import thirdImage from '../../../../assets/tutorial_three.png';
import fourImage from '../../../../assets/tutorial_four.png';

export function Walkthrough() {
  return (
    <>
      <Carousel
        swipeable
        emulateTouch
        showThumbs={false}
        className={styles.carousel}
        showArrows={false}
        showStatus={false}
        renderIndicator={(onClick, isSelected, index) => (
          <span
            onClick={onClick}
            className={isSelected ? styles.indicatorSelected : styles.indicator}
          ></span>
        )}
      >
        {data.map((item) => (
          <section className={styles.item}>
            <img src={item.image} alt="" />
            <Text type="title">{item.title} </Text>
            <p>{item.desc}</p>
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
