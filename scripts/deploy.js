const { ethers } = require("hardhat");

async function main() {
  console.log("🚀 Deploying FlashLoan contract...");

  const FlashLoan = await ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy();

  await flashLoan.waitForDeployment();

  console.log("✅ FlashLoan deployed to:", await flashLoan.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error during deployment:", error);
    process.exit(1);
  });
