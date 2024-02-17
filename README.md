# Cindelsa Assets Transfer using fxPortal
In this codebase, the 5-item collection generated using DALLE has been minted, approved and deposited from gerli to mumbai testnet.

## Description
- cindelsa.sol:

Description: Solidity smart contract implementing the ERC721A standard. It represents the "Cindelsa" NFT collection with a maximum supply of 5 tokens. The contract allows the owner to mint new tokens and provides a base URI for metadata.
- mint.js:

Description: JavaScript script using Hardhat to mint NFTs for the "Cindelsa" collection on the Goerli testnet. It utilizes the provided private key, connects to the Goerli network, and interacts with the deployed smart contract to mint 5 new NFTs.
- approveDeposit.js:

Description: JavaScript script using Hardhat to approve the transfer of NFTs from the "Cindelsa" collection to the Polygon Mumbai test network. It sets the approval for asset transfer, maps each NFT to an ID, and initiates the deposit process to the Polygon network using the FXRoot contract.
- FXRootContractAbi.js:

Description: JavaScript file containing the ABI (Application Binary Interface) of the FXRoot contract. This ABI is required for interacting with the FXRoot contract in the approveDeposit.js script.
These descriptions provide a concise summary of the purpose and functionality of each file in the context of your project.



### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance


## Authors

Pranav S Devang
[pranavssdevang@gmail.com]

## License

This project is licensed under [MIT] License.
