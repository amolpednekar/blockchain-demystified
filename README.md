# Blockchain Desmystified - Hyperledger Fabric

## Download pre-requisites

### Docker & Docker-Compose

#### Docker Installation Instructions: 
https://docs.docker.com/install/#releases (Docker version 17.06.2-ce or greater is required.)
You can test your installation by running `docker run hello-world`; It should print a message "Hello from Docker!"

#### Docker-compose installation: 
https://docs.docker.com/compose/install/#install-compose (Recommended version - 1.22.0)
You can test by running `docker-compose --version`, it should give you the version number. 

### NodeJS

Run the following steps 

Linux setup:
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ nvm install 8.11.3
```
Windows setup: https://nodejs.org/en/download/

## Download Binaries and Docker Images

The [`scripts/bootstrap.sh`](https://github.com/hyperledger/fabric-samples/blob/release-1.2/scripts/bootstrap.sh)
script will preload all of the requisite docker
images for Hyperledger Fabric and tag them with the 'latest' tag. Optionally,
specify a version for fabric, fabric-ca and thirdparty images. Default versions
are 1.2.0, 1.2.0 and 0.4.10 respectively.

```bash
$ ./scripts/bootstrap.sh 1.2.0
$ export PATH=$PATH:/root/intro-to-blockchain-pcce/scripts/bin
```
## NodeJS Package installtion requirements

On Linux

``` bash
$ sudo apt-get install build-essential
$ apt-get install python
```

On Windows
```
npm install --global windows-build-tools
npm install --global grpc
```
Install python version 2.7

## Testing

At the end of these instructions, you must have the following softwares installed
* Docker
* Docker-compose
* NodeJS & npm
* python

## License <a name="license"></a>

Hyperledger Project source code files are made available under the Apache
License, Version 2.0 (Apache-2.0), located in the [LICENSE](LICENSE) file.
Hyperledger Project documentation files are made available under the Creative
Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.
