import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ClaimDelaySet,
  Claimed,
  Cleared,
  Initialized,
  Poke,
  Processed,
  Sponsored
} from "../generated/Contract/Contract"

export function createClaimDelaySetEvent(delay: BigInt): ClaimDelaySet {
  let claimDelaySetEvent = changetype<ClaimDelaySet>(newMockEvent())

  claimDelaySetEvent.parameters = new Array()

  claimDelaySetEvent.parameters.push(
    new ethereum.EventParam("delay", ethereum.Value.fromUnsignedBigInt(delay))
  )

  return claimDelaySetEvent
}

export function createClaimedEvent(
  recipient: Address,
  commitmentHash: Bytes
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "commitmentHash",
      ethereum.Value.fromFixedBytes(commitmentHash)
    )
  )

  return claimedEvent
}

export function createClearedEvent(commitmentHash: Bytes): Cleared {
  let clearedEvent = changetype<Cleared>(newMockEvent())

  clearedEvent.parameters = new Array()

  clearedEvent.parameters.push(
    new ethereum.EventParam(
      "commitmentHash",
      ethereum.Value.fromFixedBytes(commitmentHash)
    )
  )

  return clearedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createPokeEvent(
  recipient: Address,
  commitmentHash: Bytes,
  completionReport: Bytes
): Poke {
  let pokeEvent = changetype<Poke>(newMockEvent())

  pokeEvent.parameters = new Array()

  pokeEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  pokeEvent.parameters.push(
    new ethereum.EventParam(
      "commitmentHash",
      ethereum.Value.fromFixedBytes(commitmentHash)
    )
  )
  pokeEvent.parameters.push(
    new ethereum.EventParam(
      "completionReport",
      ethereum.Value.fromFixedBytes(completionReport)
    )
  )

  return pokeEvent
}

export function createProcessedEvent(
  processor: Address,
  recipient: Address,
  commitmentHash: Bytes
): Processed {
  let processedEvent = changetype<Processed>(newMockEvent())

  processedEvent.parameters = new Array()

  processedEvent.parameters.push(
    new ethereum.EventParam("processor", ethereum.Value.fromAddress(processor))
  )
  processedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  processedEvent.parameters.push(
    new ethereum.EventParam(
      "commitmentHash",
      ethereum.Value.fromFixedBytes(commitmentHash)
    )
  )

  return processedEvent
}

export function createSponsoredEvent(
  sponsor: Address,
  recipient: Address,
  commitmentHash: Bytes,
  commitment: ethereum.Tuple
): Sponsored {
  let sponsoredEvent = changetype<Sponsored>(newMockEvent())

  sponsoredEvent.parameters = new Array()

  sponsoredEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  sponsoredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  sponsoredEvent.parameters.push(
    new ethereum.EventParam(
      "commitmentHash",
      ethereum.Value.fromFixedBytes(commitmentHash)
    )
  )
  sponsoredEvent.parameters.push(
    new ethereum.EventParam("commitment", ethereum.Value.fromTuple(commitment))
  )

  return sponsoredEvent
}
