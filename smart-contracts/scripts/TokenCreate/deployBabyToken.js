const { ethers, upgrades } = require("hardhat");

async function main() {
  const BabyToken = await ethers.getContractFactory("BabyToken");
  const babyToken = await BabyToken.deploy(
    "BabyToken",
    "ST",
    "1000",
    [
      "0xE36620eCAA275a16879FFFd22DBf5A8684c6C6Db",
      "0x1Ed675D5e63314B760162A3D1Cae1803DCFC87C7",
      "0x5874e88c157A699787eFD5Ab6CD9391ED980A959",
      "0x2080F3b056978e76913efdF7F15EaB5130B7647B",
    ],
    ["5", "5", "5"],
    "1000",
    "0x2080F3b056978e76913efdF7F15EaB5130B7647B",
    "1",
    { value: "1" }
  );

  await babyToken.deployed();

  console.log(`Deployed to ${babyToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
