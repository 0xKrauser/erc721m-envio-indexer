import { ContractMetadataEntity } from "generated";
import { validateUri } from "../../../validateUri";

export async function createMetadata({
  id,
  contractUri,
  blockTimestamp,
  blockNumber,
  isDeployed,
}: {
  id: string;
  contractUri?: string;
  blockTimestamp: bigint;
  blockNumber: bigint;
  isDeployed?: boolean;
}) {
  let metadata;

  if (contractUri) {
    const uri = validateUri(contractUri);
    if (uri) {
      try {
        const result = await fetch(uri);
        metadata = await result.json();
      } catch (e) {
        console.log("[initCollections] unable to fetch contract uri: ", uri);
      }
    } else {
      try {
        metadata = JSON.parse(contractUri);
      } catch (e) {}
    }
  }
  let raw;
  try {
    raw = metadata ? JSON.stringify(metadata) : "";
  } catch (_) {}

  const metadataEntity: ContractMetadataEntity = {
    id,
    raw,
    createdAt: isDeployed ? blockTimestamp : undefined,
    createdBlock: isDeployed ? blockNumber : undefined,
    encounteredAt: blockTimestamp,
    encounteredBlock: blockNumber,
    updatedAt: blockTimestamp,
    updatedBlock: blockNumber,
  };

  return metadataEntity;
}
