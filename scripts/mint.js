const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  //public node
  const networkAddress = "https://ethereum-goerli.publicnode.com";
//provider
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x001D57CDBAfB4804106efDe5fD063211EA0Bcddb";

  const Cindelsa = await ethers.getContractFactory("Cindelsa", signer);
  const cindelsa = await Cindelsa.attach(contractAddress);
//calling mint func
  await cindelsa.mint(5);
  console.log("The Nfts have been minted to goerli testnet.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
