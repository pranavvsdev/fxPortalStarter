const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/cindelsa.sol/cindelsa.json");

const tokenAddress = "0x750bc2DE35e60acCC635cF1Eb01968c3979F64Ec";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x396Bbc152AEE2056003414F3F2883d0b8c86F0c4"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
//mumbai balance
    console.log("current balance in mumbai: " + await token.balanceOf(walletAddress) + "CE");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
