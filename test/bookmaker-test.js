const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bookmaker", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Bookmaker = await ethers.getContractFactory("Bookmaker");
    const bookmaker = await Bookmaker.deploy();
    await bookmaker.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");
    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
