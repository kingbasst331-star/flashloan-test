const { ethers } = require("hardhat");

async function main() {
  // 👇 استبدل هذا بالعنوان الذي حصلت عليه بعد آخر عملية نشر (من deploy)
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // الحصول على نسخة من العقد المنشور
  const FlashLoan = await ethers.getContractAt("FlashLoan", contractAddress);

  console.log("📩 Current message:", await FlashLoan.getMessage());

  const tx = await FlashLoan.setMessage("Hello from interaction script!");
  await tx.wait();

  console.log("✅ Message updated");
  console.log("🆕 New message:", await FlashLoan.getMessage());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
