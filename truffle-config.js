module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: "*",
      gas: 4700000
    }
  },
  compilers: {
    solc: {
      version: "0.8.11",
      docker: false,
      parser: "solcjs",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      },
    }
  }
}
