const { ethers, upgrades } = require("hardhat");

async function main() {
  const BuybackBabyToken = await ethers.getContractFactory("BuybackBabyToken");
  const buybackBabyToken = await BuybackBabyToken.deploy(
    "BuybackBabyToken",
    "ST",
    "1000",
    "0xE36620eCAA275a16879FFFd22DBf5A8684c6C6Db",
    "0x1Ed675D5e63314B760162A3D1Cae1803DCFC87C7",
    ["1", "1", "1", "1", "20"],
    "0x2080F3b056978e76913efdF7F15EaB5130B7647B",
    "1",
    { value: "1" }
  );

  await buybackBabyToken.deployed();

  console.log(`Deployed to ${buybackBabyToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
