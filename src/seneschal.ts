import {
  Claimed as ClaimedEvent,
  Cleared as ClearedEvent,
  Poke as PokeEvent,
  Witnessed as WitnessedEvent,
  Sponsored as SponsoredEvent
} from '../generated/Seneschal/Seneschal';
import {
  Proposal,
  SponsoringDetails,
  WitnessingDetails,
  ClaimingDetails,
  PokingDetails,
  ClearingDetails,
  Commitment
} from '../generated/schema';

export function handleSponsored(event: SponsoredEvent): void {
  let proposal = new Proposal(event.params.commitmentHash.toHex());
  let commitment = new Commitment(event.params.commitmentHash.toHex());
  let sponsoringDetails = new SponsoringDetails(
    event.params.commitmentHash.toHex()
  );

  commitment.eligibleHat = event.params.commitment.eligibleHat;
  commitment.shares = event.params.commitment.shares;
  commitment.loot = event.params.commitment.loot;
  commitment.extraRewardAmount = event.params.commitment.extraRewardAmount;
  commitment.timeFactor = event.params.commitment.timeFactor;
  commitment.sponsoredTime = event.params.commitment.sponsoredTime;
  commitment.expirationTime = event.params.commitment.expirationTime;
  commitment.contextURL = event.params.commitment.contextURL;
  commitment.metadata = event.params.commitment.metadata;
  commitment.recipient = event.params.commitment.recipient;
  commitment.extraRewardToken = event.params.commitment.extraRewardToken;

  sponsoringDetails.blockNumber = event.block.number;
  sponsoringDetails.blockTimestamp = event.block.timestamp;
  sponsoringDetails.transactionHash = event.transaction.hash;

  proposal.sponsor = event.params.sponsor;
  proposal.recipient = event.params.commitment.recipient;
  proposal.commitmentDetails = commitment.id;
  proposal.sponsoringDetails = sponsoringDetails.id;
  proposal.status = 'Sponsored';

  commitment.save();
  sponsoringDetails.save();
  proposal.save();
}

export function handleWitnessed(event: WitnessedEvent): void {
  let commitment = Commitment.load(event.params.commitmentHash.toHex());

  if (commitment == null) {
    commitment = new Commitment(event.params.commitmentHash.toHex());
  }

  let proposal = Proposal.load(event.params.commitmentHash.toHex());

  if (proposal == null) {
    proposal = new Proposal(event.params.commitmentHash.toHex());
  }

  let witnessingDetails = new WitnessingDetails(
    event.params.commitmentHash.toHex()
  );

  witnessingDetails.blockNumber = event.block.number;
  witnessingDetails.blockTimestamp = event.block.timestamp;
  witnessingDetails.transactionHash = event.transaction.hash;

  proposal.witness = event.params.witness;
  proposal.witnessingDetails = witnessingDetails.id;
  proposal.status = 'Witnessed';

  witnessingDetails.save();
  proposal.save();
}

export function handleClaimed(event: ClaimedEvent): void {
  let commitment = Commitment.load(event.params.commitmentHash.toHex());

  if (commitment == null) {
    commitment = new Commitment(event.params.commitmentHash.toHex());
  }

  let proposal = Proposal.load(event.params.commitmentHash.toHex());

  if (proposal == null) {
    proposal = new Proposal(event.params.commitmentHash.toHex());
  }

  let claimingDetails = new ClaimingDetails(
    event.params.commitmentHash.toHex()
  );

  claimingDetails.blockNumber = event.block.number;
  claimingDetails.blockTimestamp = event.block.timestamp;
  claimingDetails.transactionHash = event.transaction.hash;

  proposal.claimingDetails = claimingDetails.id;
  proposal.status = 'Claimed';

  claimingDetails.save();
  proposal.save();
}

export function handleCleared(event: ClearedEvent): void {
  let commitment = Commitment.load(event.params.commitmentHash.toHex());

  if (commitment == null) {
    commitment = new Commitment(event.params.commitmentHash.toHex());
  }

  let proposal = Proposal.load(event.params.commitmentHash.toHex());

  if (proposal == null) {
    proposal = new Proposal(event.params.commitmentHash.toHex());
  }

  let clearingDetails = new ClearingDetails(
    event.params.commitmentHash.toHex()
  );

  clearingDetails.clearedBy = event.params.clearedBy;
  clearingDetails.blockNumber = event.block.number;
  clearingDetails.blockTimestamp = event.block.timestamp;
  clearingDetails.transactionHash = event.transaction.hash;

  proposal.clearingDetails = clearingDetails.id;
  proposal.status = 'Cleared';

  clearingDetails.save();
  proposal.save();
}

export function handlePoke(event: PokeEvent): void {
  let commitment = Commitment.load(event.params.commitmentHash.toHex());

  if (commitment == null) {
    commitment = new Commitment(event.params.commitmentHash.toHex());
  }

  let proposal = Proposal.load(event.params.commitmentHash.toHex());

  if (proposal == null) {
    proposal = new Proposal(event.params.commitmentHash.toHex());
  }

  let pokingDetails = new PokingDetails(event.params.commitmentHash.toHex());

  pokingDetails.completionReport = event.params.completionReport;
  pokingDetails.blockNumber = event.block.number;
  pokingDetails.blockTimestamp = event.block.timestamp;
  pokingDetails.transactionHash = event.transaction.hash;

  proposal.pokingDetails = pokingDetails.id;
  proposal.status = 'Poked';

  pokingDetails.save();
  proposal.save();
}
