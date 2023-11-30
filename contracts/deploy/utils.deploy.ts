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

  const LoanVistaScore = await ethers.getContractFactory("LoanVistaScore");
  const loanVistaScore = await LoanVistaScore.deploy();
  await loanVistaScore.deployed();

  const LoanToValueRatio = await ethers.getContractFactory("LoanToValueRatio");
  const loanToValueRatio = await LoanToValueRatio.deploy();
  await loanToValueRatio.deployed();

  console.log("Activity deployed to:", activity.address);
  console.log("PriceFeed deployed to:", priceFeed.address);
  console.log("LoanVistaScore deployed to:", loanVistaScore.address);
  console.log("LoanToValueRatio deployed to:", loanToValueRatio.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Activity deployed to: 0xBa86c386b9625E8d928207E478a6DDc6A3B10799
// PriceFeed deployed to: 0xdEcc3098eAAe386AB455C4b0b7bCE8513fB663d3
// LoanVistaScore deployed to: 0x5808DDC08C22aFDc6436A9Ab34Fa7e21267017A5
// LoanToValueRatio deployed to: 0xa61bA9401bb419B9B2d489ea090A6Bd5871e22d7