import Image from 'next/image';
import styles from './navbar.module.css';
import { Nunito } from 'next/font/google';
import {
  CiHome,
  CiHeart,
  CiSettings,
  CiWallet,
  CiClock1,
} from 'react-icons/ci';
import { IconType } from 'react-icons';
import { TfiStatsUp } from 'react-icons/tfi';
import { useState } from 'react';
const nunito = Nunito({ subsets: ['latin'] });

type INavbarElements = {
  name: string;
  icon: IconType;
};

const navbarElements: INavbarElements[] = [
  { name: 'Market', icon: CiHome },
  { name: 'Active Bid', icon: TfiStatsUp },
  { name: 'Saved', icon: CiHeart },
  { name: 'My Collection', icon: CiHeart },
  { name: 'Wallet', icon: CiWallet },
  { name: 'History', icon: CiClock1 },
  { name: 'Settings', icon: CiSettings },
];

export default function Navbar() {
  const [click, setClick] = useState(0);

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar_logo']}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className={styles['spin']}
        />
        <h3 style={nunito.style}>NftRadar</h3>
      </div>
      <div className={styles['navbar_elements']}>
        <h3>Marketplace</h3>
        {navbarElements.slice(0, 3).map((item, i) => {
          return (
            <>
              <div
                className={
                  click == i
                    ? styles['navbar_item--clicked']
                    : styles['navbar_item']
                }
                onClick={() => setClick(i)}
              >
                <item.icon size={25} />
                <p>{item.name}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles['navbar_elements']}>
        <h3>Account</h3>
        {navbarElements.slice(3, 7).map((item, i) => {
          return (
            <>
              <div
                className={
                  click == i + 3
                    ? styles['navbar_item--clicked']
                    : styles['navbar_item']
                }
                onClick={() => setClick(i + 3)}
              >
                <item.icon size={25} />
                <p>{item.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </nav>
  );
}
