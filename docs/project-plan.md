# StripperNFT Project Plan

This document outlines the necessary steps we need to take to bring this project to fruition.

## Relevant Links

- [Project Brief][1]

## Technical Decisions

Components:

* web: HTTP site
* sol: Smart contract
* obj: Content storage/retreival API
* bld: Software delivery pipeline (CI/CD, cloud etc.)

- 2021-09-06
    - sol: We will target Ethereum mainnet
    - web: We will use Vue3 options API for the frontend
    - web: We will deploy the frontend as a static site on AWS S3
    - obj: We will deploy the content retreival API as an AWS Lambda function(s)
    - bld: We will use GitHub Actions as our software delivery agent

## Timeline

| Target Date | Description |
|--- | --- |
| Sunday 2021-09-19 | Have a minting MVP running locally ([minting mvp][2]) |
| Sunday 2021-10-03 | Have a content retreival MVP running locally ([retreival mvp][3]) |

### Minting MVP

This MVP can be built with a few simple commands such as `git clone` and `make build`. It will do the following things.

- bld: deploy a local blockchain (ganache, hardhat, geth etc.)
- sol: complie an NFT minting smart contract (solidity)
- bld: deploy contract to local blockchain
- web: A UI built in Vue3 Options API will provide an interface for creator to mint an NFT

In this minting MVP we will not support any auction functionality. It will also not support functionality related to retreival of content.

### Retreival MVP

This MVP will build on the minting MVP by supporting object retreival functionality. It will continue to support everything from the minting MVP and additionally supprot:

- sol/bld: deploy auction contract to local blockchain
- obj: retreive content stored locally over ipfs protocol
- sol: auction functionality via smart contract
- web: UI for users to call the retreival API


[1]: project-brief.md "Brief"
[2]: #minting-mvp "minting mvp"
[3]: #retreival-mvp "retreival mvp"
