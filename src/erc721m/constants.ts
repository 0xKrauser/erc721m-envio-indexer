import { NftSummaryEntity, TokenEntity } from "generated";

export const INITIAL_NFT_SUMMARY: NftSummaryEntity = {
  id: "",
  chain: 0n,
  alignmentUpdateCount: 0n,
  approvalCount: 0n,
  approvalForAllCount: 0n,
  batchMetadataUpdateCount: 0n,
  blacklistUpdateCount: 0n,
  contractMetadataUpdateCount: 0n,
  customMintConfiguredCount: 0n,
  customMintDeletedCount: 0n,
  customMintDisabledCount: 0n,
  customMintReenabledCount: 0n,
  customMintRepricedCount: 0n,
  mintOpenCount: 0n,
  ownershipTransferredCount: 0n,
  priceUpdateCount: 0n,
  referralFeePaidCount: 0n,
  referralFeeUpdateCount: 0n,
  royaltyDisabledCount: 0n,
  royaltyUpdateCount: 0n,
  supplyUpdateCount: 0n,
  transferCount: 0n,
  uRILockCount: 0n,
  updatedAt: 0n,
  updatedBlock: 0n,
};

export const INITIAL_TOKEN: TokenEntity = {
  id: "",
  collection_id: "",
  token_id: 0n,
  metadata_id: "",
  metadataUri: "",
  minter_id: "",
  owner_id: "",
  chain: 0n,
  createdAt: 0n,
  createdBlock: 0n,
  updatedAt: 0n,
  updatedBlock: 0n,
};
