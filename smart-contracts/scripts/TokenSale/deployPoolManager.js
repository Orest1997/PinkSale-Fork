const { ethers, upgrades } = require("hardhat");

async function main() {
  const gas = await ethers.provider.getGasPrice();
  const PoolManager = await ethers.getContractFactory("PoolManager");
  console.log("Deploying PoolManager...");
  const poolManager = await upgrades.deployProxy(
    PoolManager,
    [
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    ],
    {
      gasPrice: gas,
      initializer: "initialize",
    }
  );
  await poolManager.deployed();
  console.log("PoolManager Contract deployed to:", poolManager.address);
  await poolManager.initializeTopPools();
  console.log("Initialized:");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
