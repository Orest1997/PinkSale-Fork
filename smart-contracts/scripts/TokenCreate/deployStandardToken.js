const { ethers, upgrades } = require("hardhat");

async function main() {
  const StandardToken = await ethers.getContractFactory("StandardToken");
  const standardToken = await StandardToken.deploy(
    "StandardToken",
    "ST",
    "18",
    "1000",
    "0x2080F3b056978e76913efdF7F15EaB5130B7647B",
    "10",
    { value: "10" }
  );

  await standardToken.deployed();

  console.log(`Deployed to ${standardToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
