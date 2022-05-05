const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Event", function () {
  let Event;
  let eventContract;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Event = await ethers.getContractFactory("Event");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
  });

  describe("constructor", function () {
    beforeEach(async function () {
      eventContract = await Event.deploy('123', 'w1', owner.address);
    });

    it("ok", async function () {
      expect(await eventContract.id()).to.equal("123");
      expect(await eventContract.kind()).to.equal("w1");
      expect(await eventContract.owner()).to.equal(owner.address);
      expect(await eventContract.state()).to.equal(0);
    });
  });
});
