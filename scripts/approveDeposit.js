const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/cindelsa.sol/cindelsa.json');
require('dotenv').config();

async function main() {
//goerli node
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();
//contract
  const Cindelsa = await ethers.getContractFactory("Cindelsa");
  const cindelsa = await Cindelsa.attach('0x001D57CDBAfB4804106efDe5fD063211EA0Bcddb');
//fxroot for transfer
  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await cindelsa.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('The Assets have been approved for transfer');
//mapping each nft to id
  const Identifier = [0,1, 2, 3, 4]; 
  for (let i = 0; i <Identifier.length; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      cindelsa.address,
      wallet.address, 
      Identifier[i],
      '0x6566',
      { gasLimit: 100000 }
    );

    await depositTx.wait();
  }
//Confirmation
  console.log("The Nfts are successfully deposited to polygon mumbai test network");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
