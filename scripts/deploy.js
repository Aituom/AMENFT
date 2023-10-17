const hre = require("hardhat");

async function main() {
  const Ame = await hre.ethers.getContractFactory("AMENFT")
  const ame = await Ame.deploy("0xE2f3497953a468B1eE75754b71c53b7E0613B512");

  await ame.waitForDeployment()
  console.log("AMENFT: ", await ame.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});