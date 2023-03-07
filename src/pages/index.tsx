import { IHeadProps } from '@/components/Head';
import Input from '@/components/Input';
import { CustomLayout } from '@/components/Layout';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/homepage.module.css'
import { NftCard } from '@/components/NftCard'

export default function Home() {
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
          <div className='homepage_banner' onClick={() => setClick(prevState => !prevState)}>
            <img
              src="https://www.arweave.net/Jmo4wDTdsDbNKtFlGGsLfxz2RSuOSXRFOpfJkwG9GD0?ext=png"
              alt="banner"
              width="100%"
              height={250}
            />
            <div className={styles['homepage_grid']}>
              <NftCard
                imageSrc=''
                name=''
                owner=''
                price={0}
              />
              <NftCard
                imageSrc=''
                name=''
                owner=''
                price={0}
              />
              <NftCard
                imageSrc=''
                name=''
                owner=''
                price={0}
              />

              <NftCard
                imageSrc=''
                name=''
                owner=''
                price={0}
              />

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
