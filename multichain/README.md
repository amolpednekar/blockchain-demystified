## Multichain

### Installing MultiChain on Linux - Download pre-requisites
```bash
$ cd /tmp
$ wget https://www.multichain.com/download/multichain-1.0.6.tar.gz
$ tar -xvzf multichain-1.0.6.tar.gz
$ cd multichain-1.0.6
$ mv multichaind multichain-cli multichain-util /usr/local/bin (to make easily accessible on the command line)
```

### Installing MultiChain on Windows - Download pre-requisites
Download https://www.multichain.com/download/multichain-windows-1.0.6.zip and extract its contents to your chosen directory.

### Getting Started with MultiChain

**Open two terminals**

On the first terminal
```bash
$ mkdir -p /root/.multichain/node1-chain1
$ multichain-util create chain1 --datadir=/root/.multichain/node1-chain1
$ multichaind chain1 --port=5000 --rpcport=4999 --datadir=/root/.multichain/node1-chain1 --daemon 
```

On the second terminal
```bash
$ mkdir -p /root/.multichain/node2-chain1
$ multichaind chain1@[ip-address]:5000 --port=6000 --rpcport=5999 --datadir=/root/.multichain/node2-chain1
```

Back on terminal one
```bash
$ multichain-cli chain1 --rpcport=4999 --datadir=/root/.multichain/chain1
>>> grant 13JG1AayNhH3aYvkZRCh81uBeJiLLNWWsR9Pkw connect,send,receive
` streams `
>>> create stream stream1 false
>>> listpermissions stream1.*
>>> publish stream1 key1 AB
```

On terminal two
```bash
$ multichaind chain1@10.53.16.135:5000 --port=6000 --rpcport=5999 --datadir=/root/.multichain/node2-chain1 --daemon
$ multichain-cli chain1 --rpcport=5999 --datadir=/root/.multichain/node2-chain1/chain1
>>> getinfo
>>> publish stream1 key1 AB (should give an error)
>>> subscribe stream1
>>> liststreamkeyitems stream1 key1
```