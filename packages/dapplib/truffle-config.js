require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rifle saddle puppy install clog surge genius'; 
let testAccounts = [
"0xfc25fa97861974e82ae6df07528f258b93ea79c764ed4f6bfdd2a636937bf544",
"0xd446120a8c01a95ce0c39557a41715d9ba44b174b21b1e903609146fb19ab53d",
"0xc77335bedb2e9b70444e9d551117a7c00d28b9042cd773f5964da580160dc7cc",
"0xed222b0c65e23b94f9c00075c12a474f66857a098a0b848c26548b5660b9dec8",
"0x19be42b0be2a37468d9ecbfc80fe4269e7dc70906565b44930bd5a322a4a0b78",
"0x730a37f44ef0cdfffb97aa0b2a7697048dc6f3a3522eebd715b8e85fee0e1914",
"0x4e5113e40d8e820421ccba830d253e3a8570db7011bd0c20d51950a97730512e",
"0xf2bd45c900ef7e293d90aa94d29066c2e17ba42ceb638ae852691f7d8dae2303",
"0x10163547f4421f6f1ba81461d40d6ac8168eafc25e6411f5ec017103ca2074aa",
"0xaf41985a2317a33c137c6b163ab985471beff75dca9e9fabb752f087b4d5d558"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

