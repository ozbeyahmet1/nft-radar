import { useState } from "react";
import { Data } from "@/types/nft";
import { NftCard } from "@/components/NftCard";
import { IHeadProps } from "@/components/Head";
import Input from '@/components/Input';
import { CustomLayout } from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/homepage.module.css'


interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
    'X-RapidAPI-Host': 'opensea-data-query.p.rapidapi.com'
  },
};


export default function Home() {
  const [address, setAddress] = useState("");
  const [nfts, setNfts] = useState<Data>(null);

  const handleFetchNfts = async () => {
    try {
      fetch('https://opensea-data-query.p.rapidapi.com/api/v1/assets?owner=0x69e67AaD5495A48c4ef3f770D93A99935e1dc90d&order_direction=desc&limit=20', options)
        .then(response => response.json())
        .then(response => setNfts(response))
        .catch(err => console.error(err));


    } catch (error) {
      console.error(error);
    }
  };
  console.log(nfts)
  const homepageHeadProps: IHeadProps = {
    title: 'Homepage',
    description: '',
    keywords: '',
    ogDescription: '',
    ogTitle: '',
  };
  const [click, setClick] = useState(false);

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
            <div className={styles['homepage_grid']} onClick={() => setClick(true)}>
              {nfts?.assets?.map((nft, i) => {
                return <NftCard
                  imageSrc={nft.image_url}
                  name={nft.name}
                  owner={nft.asset_contract?.name as string}
                  price={1}
                  key={i}
                />
              })}

            </div>
          </div>
        </div>
        {click &&
          <div className={styles['homepage--right']}>
            right
          </div>
        }
      </main>
    </CustomLayout>
  );
}
