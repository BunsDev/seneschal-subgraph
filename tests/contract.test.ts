import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ClaimDelaySet } from "../generated/schema"
import { ClaimDelaySet as ClaimDelaySetEvent } from "../generated/Contract/Contract"
import { handleClaimDelaySet } from "../src/contract"
import { createClaimDelaySetEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let delay = BigInt.fromI32(234)
    let newClaimDelaySetEvent = createClaimDelaySetEvent(delay)
    handleClaimDelaySet(newClaimDelaySetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClaimDelaySet created and stored", () => {
    assert.entityCount("ClaimDelaySet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClaimDelaySet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "delay",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
