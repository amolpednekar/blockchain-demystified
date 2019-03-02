# Web3 Setup

## Install NodeJS:

* [Install NVM (Node version manager)](https://github.com/creationix/nvm)
* Install NodeJS
```
nvm install 8.0.0

#Check node and npm  version
node -v
npm -v
```

## Install web3
```
npm install --save web3
```
* [Web3 Docs](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethaccounts)


## Sample javascript :

```javascript
var Web3= require('web3')
web3 = new Web3(new Web3.providers.HttpProvide("http://localhost:8545"));
console.log(web3.version)
console.log(web3.eth.accounts)

abi= < Add ABI from remix here >
address=<Add Deployed contract address here> ; //'0xe8081a3fc2e0a93c2bbfbb392540e503f56297d3'

// creation of contract object
var myContract = web3.eth.contract(abi).at(address)

//call the getData function our contract
myContract.getData.call(function (err, result) {
    if (err) { console.log(err) }
    console.log(result);
});

//call the setData function our contract
myContract.setData.sendTransaction(100, { from: web3.eth.accounts[0], gas: 4000000 }, function (error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
})
```