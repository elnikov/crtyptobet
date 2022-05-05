const hre = require("hardhat");

async function main() {
  const Bookmaker = await hre.ethers.getContractFactory("Bookmaker");
  const bookmaker = await Bookmaker.deploy("Hello, Hardhat!");

  await bookmaker.deployed();

  console.log("Bookmaker deployed to:", bookmaker.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
