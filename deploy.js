const HDWalletProvider = require('tuffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js');

const provider = new HDWalletProvider(
    'here put your munaic words',
    'here put your network link'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('this is deployed form account'. accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({gas: '1000000', from: accounts[0] });

    console.log('Contract now at address', result.options.address);
};

deploy();