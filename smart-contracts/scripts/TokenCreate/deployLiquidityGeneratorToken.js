const { ethers, upgrades } = require("hardhat");

async function main() {
  const LiquidityGeneratorToken = await ethers.getContractFactory(
    "LiquidityGeneratorToken"
  );
  const liquidityToken = await LiquidityGeneratorToken.deploy(
    "LiquidityGeneratorToken",
    "ST",
    "1000",
    "0x1Ed675D5e63314B760162A3D1Cae1803DCFC87C7",
    "0x2080F3b056978e76913efdF7F15EaB5130B7647B",
    "10",
    "10",
    "10",
    "0x2080F3b056978e76913efdF7F15EaB5130B7647B",
    "10",
    { value: "10" }
  );

  await liquidityToken.deployed();

  console.log(`Deployed to ${liquidityToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
