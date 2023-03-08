export type Nft = {
    readonly id: number | null;
    readonly tokenId: string | null;
    readonly image_url: string | null;
    readonly name: string | null;
    readonly asset_contract: Owner | null;
    readonly permalink: string | null;
    readonly description: string | null;
}

export type Owner = {
    readonly address: string | null;
    readonly name: string | null;
    readonly image_url: string | null;
}

export type Data = {
    next: string | null;
    previous: string | null;
    assets: Nft[] | null
} | null


// {
//     "id": 1097581144,
//     "token_id": "3586",
//     "num_sales": 0,
//     "background_color": null,
//     "image_url": "https://i.seadn.io/gcs/files/9c43f6d62651c33c19985ac476ee261a.gif?w=500&auto=format",
//     "image_preview_url": "https://i.seadn.io/gcs/files/9c43f6d62651c33c19985ac476ee261a.gif?w=500&auto=format",
//     "image_thumbnail_url": "https://i.seadn.io/gcs/files/9c43f6d62651c33c19985ac476ee261a.gif?w=500&auto=format",
//     "image_original_url": "ipfs://bafybeigvsgmxk6gjjryi4as3yr4w2kehuucu6udxc33zp54skdfzz7r2by",
//     "animation_url": null,
//     "animation_original_url": null,
//     "name": "Unrevealed Goodboi #3586",
//     "description": null,
//     "external_link": null,
//     "asset_contract": {
//         "address": "0x894a19ccf5b1137507a45bb981e2c418a73651b6",
//         "asset_contract_type": "non-fungible",
//         "created_date": "2023-03-06T00:45:25.680923",
//         "name": "Goodboi _Borzoi",
//         "nft_version": null,
//         "opensea_version": null,
//         "owner": 2885664715,
//         "schema_name": "ERC721",
//         "symbol": "GBB",
//         "total_supply": "0",
//         "description": "kermieeeee",
//         "external_link": null,
//         "image_url": "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?w=500&auto=format",
//         "default_to_fiat": false,
//         "dev_buyer_fee_basis_points": 0,
//         "dev_seller_fee_basis_points": 500,
//         "only_proxied_transfers": false,
//         "opensea_buyer_fee_basis_points": 0,
//         "opensea_seller_fee_basis_points": 0,
//         "buyer_fee_basis_points": 0,
//         "seller_fee_basis_points": 500,
//         "payout_address": "0xa186a1c7cfcad77e4acff63f16dc48fd88c9b551"
//     },
//     "permalink": "https://opensea.io/assets/ethereum/0x894a19ccf5b1137507a45bb981e2c418a73651b6/3586",
//     "collection": {
//         "banner_image_url": "https://i.seadn.io/gcs/files/511778603bc05155df30222237e703ef.png?w=500&auto=format",
//         "chat_url": null,
//         "created_date": "2023-03-06T00:51:04.702048+00:00",
//         "default_to_fiat": false,
//         "description": "kermieeeee",
//         "dev_buyer_fee_basis_points": "0",
//         "dev_seller_fee_basis_points": "500",
//         "discord_url": null,
//         "display_data": {
//             "card_display_style": "contain",
//             "images": null
//         },
//         "external_url": null,
//         "featured": false,
//         "featured_image_url": "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?w=500&auto=format",
//         "hidden": false,
//         "safelist_request_status": "not_requested",
//         "image_url": "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?w=500&auto=format",
//         "is_subject_to_whitelist": false,
//         "large_image_url": "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?w=500&auto=format",
//         "medium_username": null,
//         "name": "goodboiborzoi",
//         "only_proxied_transfers": false,
//         "opensea_buyer_fee_basis_points": "0",
//         "opensea_seller_fee_basis_points": 0,
//         "payout_address": "0xa186a1c7cfcad77e4acff63f16dc48fd88c9b551",
//         "require_email": false,
//         "short_description": null,
//         "slug": "goodboi-borzoi",
//         "telegram_url": null,
//         "twitter_username": "goodboi_borzoi",
//         "instagram_username": null,
//         "wiki_url": null,
//         "is_nsfw": false,
//         "fees": {
//             "seller_fees": {
//                 "0xa186a1c7cfcad77e4acff63f16dc48fd88c9b551": 500
//             },
//             "opensea_fees": {}
//         },
//         "is_rarity_enabled": false,
//         "is_creator_fees_enforced": false
//     },
//     "decimals": null,
//     "token_metadata": "ipfs://bafybeigz6yby2ba2id5byo6ggcpgpfptrkzzsvjoixuoxwmjdcbf5frpaq/3586",
//     "is_nsfw": false,
//     "owner": null,
//     "seaport_sell_orders": null,
//     "creator": {
//         "user": {
//             "username": null
//         },
//         "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/3.png",
//         "address": "0xa186a1c7cfcad77e4acff63f16dc48fd88c9b551",
//         "config": ""
//     },
//     "traits": [
//         {
//             "trait_type": "Phase 1",
//             "value": "Get Boned",
//             "display_type": null,
//             "max_value": null,
//             "trait_count": 0,
//             "order": null
//         }
//     ],
//     "last_sale": null,
//     "top_bid": null,
//     "listing_date": null,
//     "supports_wyvern": true,
//     "rarity_data": null,
//     "transfer_fee": null,
//     "transfer_fee_payment_token": null
// }