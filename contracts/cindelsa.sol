// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Cindelsa is ERC721A{

    address public owner;

    uint256 public maxSupply = 5;

    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmWcBegbUbUCc4gMpcnebYm19YkGmGCvM8w9G9Yh4zuPWL";
    string public prompt;

    constructor() ERC721A("cindelsa", "CE") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        prompt ="cinderella meeting elsa";
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        if(totalSupply() + quantity > maxSupply){
         revert ("5 is maximum that you can mint");
        } 
        _mint(msg.sender, quantity);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
