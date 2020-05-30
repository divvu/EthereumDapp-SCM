const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "b951ed99614c40d7a663df5f8aa69ee9";
const fs = require('fs');
const mnemonic = "purity copper liberty own color worth limit decorate purchase arch title still" // fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  
  // ,
  // compilers: {
  //   solc: {
  //     version: "^0.4.24",
  //     docker: false
  //   }
  // }
};