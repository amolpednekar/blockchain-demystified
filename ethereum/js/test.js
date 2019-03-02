var Web3= require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://10.80.67.79:8545"));

console.log(web3.version)

console.log(web3.eth.accounts)

abi= [
	{
		"constant": true,
		"inputs": [],
		"name": "getData",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "setData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];


address='0xe8081a3fc2e0a93c2bbfbb392540e503f56297d3'


// creation of contract object
var myContract = web3.eth.contract(abi).at(address)


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

