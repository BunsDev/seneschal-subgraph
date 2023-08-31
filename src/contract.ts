import {
  ClaimDelaySet as ClaimDelaySetEvent,
  Claimed as ClaimedEvent,
  Cleared as ClearedEvent,
  Initialized as InitializedEvent,
  Poke as PokeEvent,
  Processed as ProcessedEvent,
  Sponsored as SponsoredEvent
} from "../generated/Contract/Contract"
import {
  ClaimDelaySet,
  Claimed,
  Cleared,
  Initialized,
  Poke,
  Processed,
  Sponsored
} from "../generated/schema"

export function handleClaimDelaySet(event: ClaimDelaySetEvent): void {
  let entity = new ClaimDelaySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delay = event.params.delay

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.commitmentHash = event.params.commitmentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCleared(event: ClearedEvent): void {
  let entity = new Cleared(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commitmentHash = event.params.commitmentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoke(event: PokeEvent): void {
  let entity = new Poke(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.commitmentHash = event.params.commitmentHash
  entity.completionReport = event.params.completionReport

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessed(event: ProcessedEvent): void {
  let entity = new Processed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.processor = event.params.processor
  entity.recipient = event.params.recipient
  entity.commitmentHash = event.params.commitmentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsored(event: SponsoredEvent): void {
  let entity = new Sponsored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.recipient = event.params.recipient
  entity.commitmentHash = event.params.commitmentHash
  entity.commitment_eligibleHat = event.params.commitment.eligibleHat
  entity.commitment_shares = event.params.commitment.shares
  entity.commitment_loot = event.params.commitment.loot
  entity.commitment_extraRewardAmount =
    event.params.commitment.extraRewardAmount
  entity.commitment_timeFactor = event.params.commitment.timeFactor
  entity.commitment_sponsoredTime = event.params.commitment.sponsoredTime
  entity.commitment_contentDigest = event.params.commitment.contentDigest
  entity.commitment_recipient = event.params.commitment.recipient
  entity.commitment_extraRewardToken = event.params.commitment.extraRewardToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
