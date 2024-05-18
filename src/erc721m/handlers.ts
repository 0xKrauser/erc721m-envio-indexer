import { ERC721MContract } from "generated";
import { nftTransferLoader } from "./transfer/loader";
import { nftTransferHandler } from "./transfer/handler";

ERC721MContract.Transfer.loader(({ event, context }) =>
  nftTransferLoader({ event, context })
);

ERC721MContract.Transfer.handlerAsync(async ({ event, context }) =>
  nftTransferHandler({ event, context })
);
