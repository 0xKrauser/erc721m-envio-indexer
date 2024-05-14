import { FactorySummaryEntity } from "generated";
import { zeroAddress } from "viem";

export const INITIAL_EVENTS_SUMMARY: FactorySummaryEntity = {
  id: "",
  chain: BigInt(0),
  address: zeroAddress,
  deployedCount: BigInt(0),
  ownershipTransferredCount: BigInt(0),
  updatedAt: BigInt(0),
  updatedBlock: BigInt(0),
};
