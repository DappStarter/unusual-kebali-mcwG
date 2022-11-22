require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth pulse proof gesture globe equal gas'; 
let testAccounts = [
"0xb3dcbf93fd64cb67e373473f3408d2c71689feb56463b30b42eaa5215b3c2c97",
"0x106d1876c73e905847d1a976d35c3f8cdca5166381cca136f3ca5e6bdff95851",
"0x118dbe513edcd2e7d3b545308294236a1bda889707949b338cc31285515cac67",
"0xe8dbcc9d0adf3c031339eb40d6cde775ea0c195ad5f35dbf5cfe5312934b6df0",
"0x7c6a075c060b7ffcf7503dcbb4119573a13287df5cdd8a6040571568d6cc3f51",
"0x980e4fe46afd6fac000c93c5e940840486675f875287cbba638d39c01c5e2887",
"0xbc2507669bc07d91b6b646b50570c5d4d219855c392b30d1fe4f68d2b6f98cd5",
"0xe0f344fd3fc1a8f39a85715725e3ba386427e16b1ae4c917be471ad195141cd7",
"0x543b8c955b4cea32b2be829a1d01b90ba9c2ec987e0757ad3889178e8bbd9eee",
"0x574e46f3076b2d832e9975a5655d05a11d3361f17f475069db3ed0c9fdc43635"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


