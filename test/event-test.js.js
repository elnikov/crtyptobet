const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Event", function () {
  it("Ok", async function () {
    const Event = await ethers.getContractFactory("Event");
    const event = await Event.deploy();
    await event.deployed();

    // expect(await event.greet()).to.equal("Hello, world!");
    // const setGreetingTx = await event.setGreeting("Hola, mundo!");
    // await setGreetingTx.wait();
    // expect(await event.greet()).to.equal("Hola, mundo!");
  });
});
