import styles from './nftCard.module.css'

export interface INftCardProps {
    imageSrc: string | null;
    owner: string | null;
    price: number | null;
    name: string | null;
}

export const NftCard: React.FC<INftCardProps> = ({ imageSrc, owner, price, name }) => {
    return (
        <div className={styles['nftCard']} >
            <div className={styles['nftCard_image']}>
                <img src={imageSrc as string} alt="" />
                <div className={styles['nftCard_banner']}>
                    <h4>{name}</h4>
                    <div>
                        <p className={styles['nftCard_currentBid']}>Current Bid</p>
                        <p className={styles['nftCard_price']}>{price} ETH</p>
                    </div>
                </div>
            </div>
            <div className={styles['nftCard--bottom']}>
                <div>
                    <p>Artwork by</p>
                    <p className={styles['nftCard_text--pink']}>{owner}</p>
                </div>
                <div>
                    <p className={styles['nftCard_text--pink']}>82</p>
                    <p>Bids</p>
                </div>
            </div>

        </div >
    );

}

