var Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://10.80.67.79:8545"));

console.log(web3.eth.accounts.wallet)

abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "setData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
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
	}
]

accountAddress = "0xd9a15035eaac74479066481147f46dfdac40fa80"

// Use Wb3 to get the balance of the accountAddress, convert it and then show it in the console.
web3.eth.getBalance(accountAddress, function (error, result) {
	if (!error)
		console.log('Ether:', web3.utils.fromWei(result, 'ether')); // Show the ether balance after converting it from Wei
	else
		console.log('Houston we have a promblem: ', error); // Should dump errors here
});

contractAddress = "0x62f2f6542701f22986d18fb1df518b670560cd30"
// creation of contract object
var myContract = new web3.eth.Contract(abi, contractAddress)

myContract.methods.getData().call().then((result) => {
	console.log("GetData success:" + result)
}).catch((err) => console.log("GetData error: " + err))

myContract.methods.setData(200).send({
	from: accountAddress,
	gas: 4000000
}).once('transactionHash', function (hash) {
	console.log(hash)
}).once('receipt', function (receipt) {
	myContract.methods.getData().call().then((result) => {
		console.log("GetData success:" + result)
	}).catch((err) => console.log("GetData error: " + err))
}).on('error', function (error) { console.log(error) })

