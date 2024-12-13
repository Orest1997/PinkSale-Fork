const { ethers, upgrades } = require("hardhat");

async function main() {
  const PrivatePool = await ethers.getContractFactory("PrivatePool");
  const privatepool = await PrivatePool.deploy();

  await privatepool.deployed();

  console.log(`Deployed to ${privatepool.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
