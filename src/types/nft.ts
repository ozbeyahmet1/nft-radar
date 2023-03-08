export type Nft = {
  readonly id: number | null;
  readonly tokenId: string | null;
  readonly image_url: string | null;
  readonly name: string | null;
  readonly asset_contract: Owner | null;
  readonly permalink: string | null;
  readonly description: string | null;
};

export type Owner = {
  readonly address: string | null;
  readonly name: string | null;
  readonly image_url: string | null;
};

export type Data = {
  next: string | null;
  previous: string | null;
  assets: Nft[] | null;
} | null;
