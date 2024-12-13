const { ethers, upgrades } = require("hardhat");

async function main() {
  const gas = await ethers.provider.getGasPrice();

  const PresalePool = await ethers.getContractFactory("PresalePool");
  const presalepool = await PresalePool.deploy();

  await presalepool.deployed();

  console.log(`Deployed Presale Pool to ${presalepool.address}`);

  const PrivatePool = await ethers.getContractFactory("PrivatePool");
  const privatepool = await PrivatePool.deploy();

  await privatepool.deployed();

  console.log(`Deployed Private Pool to ${privatepool.address}`);

  const FairPool = await ethers.getContractFactory("FairPool");
  const fairpool = await FairPool.deploy();

  await fairpool.deployed();

  console.log(`Deployed Fair Pool to ${fairpool.address}`);

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

  const PoolFactory = await ethers.getContractFactory("PoolFactory");
  console.log("Deploying PoolFactory...");
  const poolfactory = await upgrades.deployProxy(
    PoolFactory,
    [
      presalepool.address,
      privatepool.address,
      poolManager.address,
      fairPool.address,
      "1",
      "300000000000000000",
      "300000000000000000",
      "800000000000000000",
      "800000000000000000",
      "800000000000000000",
      "1000",
      "true",
    ],
    {
      gasPrice: gas,
      initializer: "initialize",
    }
  );
  await poolfactory.deployed();
  console.log("PoolFactory Contract deployed to:", poolfactory.address);
  await poolfactory.setAdminWallet(
    "0x855618D23de37e8EaC965bb4Da9a2e5884835aF2"
  );
  console.log("Set Admin Wallet");
  await poolfactory.setPoolOwner(poolfactory.address);
  console.log("Set Pool Owner");

  await poolManager.addAdminPoolFactory(poolfactory.address);
  console.log("addAdminPoolFactory");

  const TokenLocker = await ethers.getContractFactory("SafeLocker");
  const tokenLocker = await TokenLocker.deploy();

  await tokenLocker.deployed();

  console.log(`Deployed to ${tokenLocker.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
