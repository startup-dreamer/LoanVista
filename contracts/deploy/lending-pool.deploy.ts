import { ethers } from 'hardhat';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

async function main() {
    const LendingPool = await ethers.getContractFactory("LendingPool");
    const lendingPool = await LendingPool.deploy();
    await lendingPool.deployed();

    console.log("LendingPool deployed to:", lendingPool.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// LendingPool deployed to: 0x9EDdd92cF5b7ff87eaf8ac9483DFF5BEbF69211d