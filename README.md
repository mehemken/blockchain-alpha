# Blockchain Alpha

This repo houses code we can share to build StripperNFT. The `code` directory has some tutorial code. It's definitely not meant for production.

## Project Status

* [Project Brief][1]
* [Project Plan][2]

## Dependencies

- [IPFS binary][3]

## Using IPFS

We have our NFT metadata in JSON in the directory `hh/nft-metadata/`. This will ultimately be the NFT. It is the component of the NFT that makes it more than just a crypto hash on some account wallet. But we don't add that to the blockchain. We put that JSON in IPFS. IPFS gives us a URI and we put the URI in the blockchain. How?

```
ipfs add <filename>
```

This will return a hash. We use that hash as a URI like so: `https://ipfs.io/ipfs/QmQmtZPELKRYoUyDWfsrN5JwFQaSFxJsHtW1PrRPwhhtR8`. (This particular URI is JSON that lives on my M1 Macbook Air and is only accessible through my local IPFS gateway. In other words, it is a dev URI that only I have access to.)

[1]: docs/project-brief.md "Brief"
[2]: docs/project-plan.md "Plan"
[3]: https://docs.ipfs.io/install/command-line/#system-requirements "IPFS"
