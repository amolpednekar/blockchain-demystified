# Ethereum Guide

## Pre-requisites

### Geth (Go-Ethereum client): 
[https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu)
```
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

## References:
* [Managing your accounts](https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts)
* [Management APIs](https://github.com/ethereum/go-ethereum/wiki/Management-APIs)

## Hands on

```console
$ # Create a new EOA
$ geth account new 
$ # View all EOA's on your node
$ geth account list
$ # Access geth console
$ geth console
$ # View created accounts
> personal.listAccounts
> ["0x7097419d4b5addf1db3cd92504ab38d2bde53949"]
> # Set the address to which mining rewards will go to
> miner.setEtherbase(web3.personal.listAccounts[0])
> # Start, stop mining
> miner.start()
> miner.stop()
> # Wait for the DAG to get generated for the logs to stop
> # View balance
> web3.eth.getBalance(web3.personal.listAccounts[0])
> # Unlock account to deploy contracts
> web3.personal.unlockAccount(web3.personal.listAccounts[0],"<password>", 15000)
> # Start rpc listener
> admin.startRPC("0.0.0.0",8545,"*")

```
## Smart Contract:

* [Simple Smart Contract](./simple.sol)
* [Token Smart Contract](./purchase.sol)

### Interact with Smart Contract 

* [Browser-compiler solidity](https://remix.ethereum.org/)
* [With javascript](./js/Web3Integration.md)

