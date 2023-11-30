import { ethers } from 'hardhat';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

async function main() {
  const LoanManager = await ethers.getContractFactory("LoanManager");
  const loanManager = await LoanManager.deploy();
  await loanManager.deployed();

  const OfferManager = await ethers.getContractFactory("OfferManager");
  const offerManager = await OfferManager.deploy();
  await offerManager.deployed();

  const FeeManager = await ethers.getContractFactory("FeeManager");
  const feeManager = await FeeManager.deploy();
  await feeManager.deployed();

  console.log("LoanManager deployed to:", loanManager.address);
  console.log("OfferManager deployed to:", offerManager.address);
  console.log("FeeManager deployed to:", feeManager.address);
  return;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// LoanManager deployed to: 0x43777c2Be846592E607dDb1D4fF37f9e3d696764
// OfferManager deployed to: 0x618D96e5E9FFa25B27015c12CD08AeD1a349785c
// FeeManager deployed to: 0x9e2dCF8a2FB63a243714F09A086D11Ede9EfEF05