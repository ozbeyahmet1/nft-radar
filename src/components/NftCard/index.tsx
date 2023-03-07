import styles from './nftCard.module.css'

export interface INftCardProps {
    imageSrc: string;
    owner: string;
    price: number;
    name: string;
}

export const NftCard: React.FC<INftCardProps> = ({ imageSrc, owner, price, name }) => {
    return (
        <div className={styles['nftCard']} >
            <div className={styles['nftCard_image']}>
                <img src="https://informationage-staging.s3.amazonaws.com/uploads/2022/10/nft-use-cases-for-businesses.jpeg" alt="" />
                <div className={styles['nftCard_banner']}>
                    <h4>Spiralie Artwokr</h4>
                    <div>
                        <p className={styles['nftCard_currentBid']}>Current Bid</p>
                        <p className={styles['nftCard_price']}>4.39 ETH</p>
                    </div>
                </div>
            </div>
            <div className={styles['nftCard--bottom']}>
                <div>
                    <p>Artwork by</p>
                    <p className={styles['nftCard_text--pink']}>user</p>
                </div>
                <div>
                    <p className={styles['nftCard_text--pink']}>82</p>
                    <p>Bids</p>
                </div>
            </div>

        </div >
    );

}

