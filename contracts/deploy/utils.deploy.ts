import { ethers } from 'hardhat';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

async function main() {

  const Activity = await ethers.getContractFactory("Activity");
  const activity = await Activity.deploy();
  await activity.deployed();

  const PriceFeed = await ethers.getContractFactory("PriceFeed");
  const priceFeed = await PriceFeed.deploy();
  await priceFeed.deployed();

  const DarshScore = await ethers.getContractFactory("DarshScore");
  const darshScore = await DarshScore.deploy();
  await darshScore.deployed();

  const LoanToValueRatio = await ethers.getContractFactory("LoanToValueRatio");
  const loanToValueRatio = await LoanToValueRatio.deploy();
  await loanToValueRatio.deployed();

  console.log("Activity deployed to:", activity.address);
  console.log("PriceFeed deployed to:", priceFeed.address);
  console.log("DarshScore deployed to:", darshScore.address);
  console.log("LoanToValueRatio deployed to:", loanToValueRatio.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });