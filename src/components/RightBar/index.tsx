import { Nft } from '@/types/nft';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './rightBar.module.css'
import { IoCloseOutline } from 'react-icons/io5';
import { motion } from "framer-motion";
export interface IRightBar {
    data: Nft
    setVisibility: Dispatch<SetStateAction<boolean>>
}



export default function RightBar({ data, setVisibility }: IRightBar) {

    return (

        <div className={styles['rightBarWrapper']}>
            <div className={styles['rightBar']}>
                <IoCloseOutline size={30} className={styles['rightBar_closeIcon']} color="white" onClick={() => setVisibility(false)} />
                <img src={data.image_url as string} alt="" className={styles['rightBar_nftImage']} />
                <div className={styles['rightBar_index']}>
                    <img src={data?.asset_contract?.image_url as string} alt="" className={styles['rightBar_userImage']} />
                    <div>
                        <p className={styles['rightBar_name']}>{data?.name}</p>
                        <p className={styles['rightBar_owner']}>{data?.asset_contract?.name}</p>
                    </div>
                </div>
                <p className={styles['rightBar_description']}>{data.description}</p>
                <a href={data.permalink as string} target='_blank' className={styles['rightBar_anchor']}>
                    <button className={styles['rightBar_button']}>
                        <img
                            src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png'
                            width={40}
                            height={40}
                        />
                        <p>See in Opensea</p>
                    </button>
                </a>
            </div>
        </div>

    );
}
