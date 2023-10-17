require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
//require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/b00cc789c4f540f9881e75cc8331bdec",
      accounts: ['34e71a4054f77f70d544516295af9f379e730862a89f83d51cd469c7be86a2c2']
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
