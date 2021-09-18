# Architecture Decision Record

This is a running record of architectural decisions based on the method described by [Michael Nygard in Documenting Architecture Decisions][1].

## Decisions

### ADR 1: Local dev IPFS to run without using Docker

**Status**

Accepted unilaterally on 2021-09-18 by Emilio  
Propposed on 2021-09-18 by Emilio  

**Context**

In order to mint an NFT we must provide a `tokenURI`, which [is a string that should resolve to a JSON document that describes the NFT's metadata][2]. This URI should be an IPFS address. The [IPFS site][3] advertises a [Run IPFS inside Docker][4] installation method. Unfortunately the docker image depends on qemu, which fails with a segfault when run on an M1 macbook. I am currently developing on an M1 macbook.

**Decision**

The local dev environment will run IPFS outside of a docker container [using these instructions][5].

**Consequences**

I'll be able to continue to set up the dev environment without having to wait months for this to get fixed.

[1]: https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions "ADR"
[2]: https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/#write-contract "tokenURI"
[3]: https://docs.ipfs.io/ "IPFS"
[4]: https://docs.ipfs.io/how-to/run-ipfs-inside-docker/ "Docker"
[5]: https://docs.ipfs.io/install/command-line/#system-requirements "command-line"
