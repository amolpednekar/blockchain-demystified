# Hyperledger Fabric Guide

## Download pre-requisites

### Docker & Docker-Compose

#### Docker Installation Instructions: 
https://docs.docker.com/install/#releases (Docker version 17.06.2-ce or greater is required.)

Install docker according to your Operating System. Here are instructions for Ubuntu OS - https://docs.docker.com/install/linux/docker-ce/ubuntu/ 

You can test your installation by running `docker run hello-world`; It should print a message "Hello from Docker!"

#### Docker-compose installation: 
https://docs.docker.com/compose/install/#install-compose (Recommended version - 1.22.0). Select the tab based on your OS and install.

You can test by running `docker-compose --version`, it should give you the version number. 

### NodeJS

Run the following steps 

Linux setup:
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash  #Installs NodeJS version manager
$ source ~/.bashrc #Reloads the shell
$ nvm install 8.11.3    #Installs NodeJS version 8.11.3
```
Windows setup: https://nodejs.org/en/download/

### Download Fabric Binaries and Docker Images

The bootstrap script will preload all of the requisite docker images and binaries for Hyperledger Fabric

```bash
$ cd blockchain-demystified/hyperledger-fabric/scripts/
$ sudo chmod +x bootstrap.sh
$ ./bootstrap.sh 1.2.0
$ export PATH=$PATH:$PWD/bin    #Add binaries to executable path
```
### Installation Extras

**On Linux**

``` bash
$ sudo apt-get install build-essential
$ sudo apt-get install python
```

**On Windows**
```
npm install --global windows-build-tools
npm install --global grpc
```
### Python
`Install python version 2.7`
```bash
$ sudo apt-get install python
```

### Testing

At the end of these instructions, you must have the following softwares installed
* Docker
* Docker-compose
* NodeJS & npm
* python

### Full setup guide
All the above steps are taken from the guides below, if you want more detailed documentation.

* [Pre-requisites](https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html)
* [Samples, Binaries and Docker Images](https://hyperledger-fabric.readthedocs.io/en/latest/install.html)

## Getting started

```bash
$ cd blockchain-demystified/hyperledger-fabric/sdk/
$ sudo chmod +x startFabric.sh ../basic-network/start.sh ../basic-network/stop.sh
$ ./startFabric.sh
$ node enrollAdmin.js
$ node registerUser.js
$ node query.js queryAllCars
$ node invoke.js createCar CAR12 Honda Accord Black Tom
$ node query.js queryCar CAR12
$ node invoke.js changeCarOwner CAR12 Dave 
$ node query.js queryCar CAR12
```
