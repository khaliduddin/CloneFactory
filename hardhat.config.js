//require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.2",
  defaultNetwork: "kovan",
  networks: {
    kovan: {
      url: process.env.INFURA_API_KEY_KOVAN,
      accounts: [ process.env.PRI_KEY_KOVAN ],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
