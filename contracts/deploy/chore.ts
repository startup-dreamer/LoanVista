const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const PriceFeed = await hre.ethers.getContractAt("PriceFeed", "PriceFeedAddress");
    await PriceFeed.addPriceFeed(NATIVE, "0xe04676B9A9A2973BCb0D1478b5E1E9098BBB7f3D");
    // ... repeat for other tokens

    const LoanToValueRatio = await hre.ethers.getContractAt("LoanToValueRatio", "LoanToValueRatioAddress");
    await LoanToValueRatio.setDarshScore(DarshScore.address, 100, 120);

    const DarshScore = await hre.ethers.getContractAt("DarshScore", "DarshScoreAddress");
    await DarshScore.setActivity(Activity.address);

    const OfferManager = await hre.ethers.getContractAt("OfferManager", "OfferManagerAddress");
    await OfferManager.setLendingPool(LendingPool.address);

    const LoanManager = await hre.ethers.getContractAt("LoanManager", "LoanManagerAddress");
    await LoanManager.setLendingPool(LendingPool.address);

    const FeeManager = await hre.ethers.getContractAt("FeeManager", "FeeManagerAddress");
    await FeeManager.setLendingPool(LendingPool.address);

    const Activity = await hre.ethers.getContractAt("Activity", "ActivityAddress");
    await Activity.setLendingPool(LendingPool.address);

    const LendingPool = await hre.ethers.getContractAt("LendingPool", "LendingPoolAddress");
    await LendingPool.setFeeds(/* parameters */);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });