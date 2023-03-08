import { useEffect, useState } from 'react';
import { Data } from '@/types/nft';
import { NftCard } from '@/components/NftCard';
import { IHeadProps } from '@/components/Head';
import Input from '@/components/Input';
import { CustomLayout } from '@/components/Layout';
import styles from '../styles/homepage.module.css';
import RightBar from '@/components/RightBar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 20,
    opacity: 1,
  },
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_RAPID_API_KEY as string,
    'X-RapidAPI-Host': 'opensea-data-query.p.rapidapi.com',
  },
};
console.log(process.env.RAPID_API_KEY as string)
export default function Home() {
  const [showRightBar, setShowRightBar] = useState<boolean>(false);
  const [nfts, setNfts] = useState<Data>(null);
  const [selectedNft, setSelectedNft] = useState(0);
  const [inputValue, setInputValue] = useState(
    '0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1'
  );
  const [statue, setStatue] = useState(false);
  const handleFetchNfts = async () => {
    setStatue(false)
    try {
      fetch(
        `https://opensea-data-query.p.rapidapi.com/api/v1/assets?owner=${inputValue}&order_direction=desc&limit=20`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setNfts(response);
          setStatue(true);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('sws');
    handleFetchNfts();
  }, [inputValue]);

  const homepageHeadProps: IHeadProps = {
    title: 'Homepage',
    description: '',
    keywords: '',
    ogDescription: '',
    ogTitle: '',
  };

  return (
    <CustomLayout headProps={homepageHeadProps}>
      <main className={styles['homepage']}>
        <div className={styles['homepage--left']}>
          <Input
            setInputValue={setInputValue}
            fetchNfts={handleFetchNfts}
            inputValue={inputValue}
          />
          <div className={styles['homepage_banner']}>
            <img
              src="https://t4.ftcdn.net/jpg/04/20/77/27/240_F_420772734_EUQv6soEJ0dZ2bcug8frDt73Pk4yXUbb.jpg"
              alt="banner"
              width="100%"
              height={250}
            />
            <div className={styles['homepage_slogan']}>
              <div className={styles['homepage_motto']}>
                <h2>
                  Discover the Unseen: Unlock the World of NFTs with Our App!
                </h2>
                <h4>Start Searching</h4>
              </div>
              <img
                src="https://crossingdeersociety.com/wp-content/uploads/elementor/thumbs/Deer_NFT_002-1-polvxtkggn8vqtuua5clv0qemu2kewqrbog637500o.png"
                alt=""
              />
            </div>
          </div>
          {statue ? (
            <motion.ul
              className={styles['homepage_grid']}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {nfts?.assets?.map((nft, i) => {
                return (
                  <motion.li key={i} variants={item}>
                    <NftCard
                      imageSrc={nft.image_url}
                      name={nft.name}
                      owner={nft.asset_contract?.name as string}
                      price={1}
                      key={i}
                      onClick={() => {
                        setSelectedNft(i);
                        setShowRightBar(true);
                      }}
                    />
                  </motion.li>
                );
              })}
            </motion.ul>
          ) : (
            <div className={styles['homepage_loading']}>
              <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className={styles['spin']}
              />
            </div>
          )}
        </div>

        {showRightBar && nfts?.assets && (
          <RightBar
            data={nfts?.assets[selectedNft]}
            setVisibility={setShowRightBar}
          />
        )}
      </main>
    </CustomLayout>
  );
}
