import {
  ERC721MContract_TransferEvent_handlerContextAsync,
  ERC721MContract_TransferEvent_loaderContext,
  ERC721MContract_Transfer_EventLog,
  TokenEntity,
} from "generated";

export type nftTransferEventLog = ERC721MContract_Transfer_EventLog;

export type nftTransferLoaderContext =
  ERC721MContract_TransferEvent_loaderContext;
export type nftTransferContext =
  ERC721MContract_TransferEvent_handlerContextAsync;
