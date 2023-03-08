import { useState } from "react";
import { Data } from "@/types/nft";
import { NftCard } from "@/components/NftCard";
import { IHeadProps } from "@/components/Head";
import Input from '@/components/Input';
import { CustomLayout } from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/homepage.module.css'
import RightBar from "@/components/RightBar";



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '28356f654amshecd9ed1a32658c9p157104jsnc94dac598f66',
    'X-RapidAPI-Host': 'opensea-data-query.p.rapidapi.com'
  },
};


export default function Home() {
  const [showRightBar, setShowRightBar] = useState<boolean>(false);
  const [nfts, setNfts] = useState<Data>(null);
  const [selectedNft, setSelectedNft] = useState(0);


  const handleFetchNfts = async () => {
    try {
      fetch('https://opensea-data-query.p.rapidapi.com/api/v1/assets?owner=0xdA4966870A9b4ce849C2011a007a896B7F212B70&order_direction=desc&limit=20', options)
        .then(response => response.json())
        .then(response => setNfts(response))
        .catch(err => console.error(err));


    } catch (error) {
      console.error(error);
    }
  };


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
          <Input />
          <div className='homepage_banner' onClick={handleFetchNfts}>
            <img
              src="https://www.arweave.net/Jmo4wDTdsDbNKtFlGGsLfxz2RSuOSXRFOpfJkwG9GD0?ext=png"
              alt="banner"
              width="100%"
              height={250}
            />
            <div className={styles['homepage_grid']}>
              {nfts?.assets?.map((nft, i) => {
                return <NftCard
                  imageSrc={nft.image_url}
                  name={nft.name}
                  owner={nft.asset_contract?.name as string}
                  price={1}
                  key={i}
                  onClick={() => {
                    setSelectedNft(i)
                    setShowRightBar(true)
                  }}
                />
              })}

            </div>
          </div>
        </div>

        {(showRightBar && nfts?.assets) &&
          <RightBar data={nfts?.assets[selectedNft]} setVisibility={setShowRightBar} />
        }
      </main>
    </CustomLayout>
  );
}
