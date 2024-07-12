const fs = require('fs');

require("@nomicfoundation/hardhat-toolbox");

const privateKey = fs.readFileSync('.secret').toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 43113,
    },
  },
  solidity: "0.8.20",
};
