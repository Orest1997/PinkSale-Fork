const { ethers, upgrades } = require("hardhat");

async function main() {
  const FairPool = await ethers.getContractFactory("FairPool");
  const fairPool = await FairPool.deploy();

  await fairPool.deployed();

  console.log(`Deployed to ${fairPool.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
