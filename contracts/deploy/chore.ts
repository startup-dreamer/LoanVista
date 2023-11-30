const hre = require("hardhat");

async function main() {
    console.log('started');
    
    const [deployer] = await hre.ethers.getSigners();

    const LoanToValueRatio = await hre.ethers.getContractAt("LoanToValueRatio", "0xa61bA9401bb419B9B2d489ea090A6Bd5871e22d7");
    await LoanToValueRatio.setLoanVistaScore('0x5808DDC08C22aFDc6436A9Ab34Fa7e21267017A5', 100, 120);

    const LoanVistaScore = await hre.ethers.getContractAt("LoanVistaScore", "0x5808DDC08C22aFDc6436A9Ab34Fa7e21267017A5");
    await LoanVistaScore.setActivity('0xBa86c386b9625E8d928207E478a6DDc6A3B10799');

    const OfferManager = await hre.ethers.getContractAt("OfferManager", "0x618D96e5E9FFa25B27015c12CD08AeD1a349785c");
    await OfferManager.setLendingPool('0x9EDdd92cF5b7ff87eaf8ac9483DFF5BEbF69211d');

    const LoanManager = await hre.ethers.getContractAt("LoanManager", "0x43777c2Be846592E607dDb1D4fF37f9e3d696764");
    await LoanManager.setLendingPool('0x9EDdd92cF5b7ff87eaf8ac9483DFF5BEbF69211d');

    const FeeManager = await hre.ethers.getContractAt("FeeManager", "0x9e2dCF8a2FB63a243714F09A086D11Ede9EfEF05");
    await FeeManager.setLendingPool('0x9EDdd92cF5b7ff87eaf8ac9483DFF5BEbF69211d');

    const Activity = await hre.ethers.getContractAt("Activity", "0xBa86c386b9625E8d928207E478a6DDc6A3B10799");
    await Activity.setLendingPool('0x9EDdd92cF5b7ff87eaf8ac9483DFF5BEbF69211d');

    const LendingPool = await hre.ethers.getContractAt("LendingPool", "0x9EDdd92cF5b7ff87eaf8ac9483DFF5BEbF69211d");
    await LendingPool.setFeeds('0xa61bA9401bb419B9B2d489ea090A6Bd5871e22d7', '0xBa86c386b9625E8d928207E478a6DDc6A3B10799', '0xdEcc3098eAAe386AB455C4b0b7bCE8513fB663d3');
    await LendingPool.setManagers('0x43777c2Be846592E607dDb1D4fF37f9e3d696764', '0x618D96e5E9FFa25B27015c12CD08AeD1a349785c', '0x9e2dCF8a2FB63a243714F09A086D11Ede9EfEF05');
    console.log('finished');
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });