import { TokenEntity } from "generated";
import { nftTransferContext, nftTransferEventLog } from "../constants";
import { getTokenId } from "../utils";
import { INITIAL_TOKEN } from "../../constants";
import { getCollectionId } from "../../utils";

export async function createOrUpdateToken({
  event,
  context,
}: {
  event: nftTransferEventLog;
  context: nftTransferContext;
}): Promise<TokenEntity> {
  const id = getTokenId(event);
  const collection_id = getCollectionId(event);

  const token = await context.Token.get(id);

  const currentTime = BigInt(event.blockTimestamp);
  const currentBlock = BigInt(event.blockNumber);

  let metadataUri: string | undefined;

  /*
  if (!token) {
    const { chainId } = event;
    const address = event.srcAddress as Address;
    const tokenId = event.params.id;
    metadataUri = await getTokenMetadata({
      chainId,
      address,
      tokenId,
      blockNumber: currentBlock,
    });
  }
  */

  const currentTokenEntity: TokenEntity = token ?? {
    ...INITIAL_TOKEN,
    id,
    chain: BigInt(event.chainId),
    collection_id,
    token_id: event.params.id,
    metadata_id: id, //@TODO
    metadataUri, //@TODO
    minter_id: event.params.to,
    createdAt: currentTime,
    createdBlock: currentBlock,
  };

  const nextTokenEntity: TokenEntity = {
    ...currentTokenEntity,
    owner_id: event.params.to,
    updatedAt: currentTime,
    updatedBlock: currentBlock,
  };

  return nextTokenEntity;
}
