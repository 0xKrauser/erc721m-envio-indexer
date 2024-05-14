import { ContractMetadataEntity, UserEntity, eventLog } from "generated";
import { zeroAddress } from "viem";

export const getFactoryId = (event: eventLog<any>) => {
  return `${event.chainId}_${event.srcAddress}`;
};

export const INITIAL_USER: UserEntity = {
  id: zeroAddress,
  encounteredAt: BigInt(0),
  updatedAt: BigInt(0),
};

export const INITIAL_CONTRACT_METADATA: ContractMetadataEntity = {
  id: "",
  raw: "",
  createdAt: undefined,
  createdBlock: undefined,
  encounteredAt: undefined,
  encounteredBlock: undefined,
  updatedAt: undefined,
  updatedBlock: undefined,
};
