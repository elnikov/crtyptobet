const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Event", function () {
  let Event;
  let eventContract;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addr4;
  let addrs;

  beforeEach(async function () {
    Event = await ethers.getContractFactory("Event");
    [owner, addr1, addr2, addr3, addr4, ...addrs] = await ethers.getSigners();
  });

  describe("setBet", function () {
    beforeEach(async function () {
      eventContract = await Event.deploy('123', 'w1', owner.address);
    });

    it("single bet", async function () {
      await eventContract.connect(addr1).setBet(0,{ value: ethers.utils.parseEther("0.5")})

      expect(await eventContract.totalBets()).to.equal(1);
      expect(await eventContract.totalAmount()).to.equal(ethers.utils.parseEther("0.5"));
    });

    it("multi bet", async function () {
      await eventContract.connect(addr1).setBet(0,{ value: ethers.utils.parseEther("0.5")})
      await eventContract.connect(addr2).setBet(1,{ value: ethers.utils.parseEther("1")})
      await eventContract.connect(addr3).setBet(1,{ value: ethers.utils.parseEther("0.1")})
      await eventContract.connect(addr4).setBet(1,{ value: ethers.utils.parseEther("2")})

      expect(await eventContract.totalBets()).to.equal(4);
      expect(await eventContract.totalAmount()).to.equal(ethers.utils.parseEther("3.6"));
    });

    it("zero value", async function () {
      await expect(eventContract.connect(addr1).setBet(0,{ value: ethers.utils.parseEther("0.0")}))
      .to.be.revertedWith('Bet value must be positive');
    });

    it("result out of range", async function () {
      await expect(eventContract.connect(addr1).setBet(3,{ value: ethers.utils.parseEther("0.5")}))
      .to.be.reverted
    });
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
