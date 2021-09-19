# Blockchain Alpha

This repo houses code we can share to build StripperNFT. The `code` directory has some tutorial code. It's definitely not meant for production.

## Project Status

* [Project Brief][1]
* [Project Plan][2]

## Dependencies

- [IPFS binary][3]

## Using IPFS

We have our NFT metadata in JSON in the directory `hh/nft-metadata/`.

```
{
  "attributes": [
    {
      "trait_type": "Composition",
      "value": "Forty percent titanium"
    }
  ],
  "description": "Walk up to the club like whaddup bite my shiny metal ass.",
  "image": "https://static.tvtropes.org/pmwiki/pub/images/bender_0.jpg",
  "name": "Ramses"
}
```

This will ultimately be the NFT. It is the component of the NFT that makes it more than just a crypto hash on some account wallet. But we don't add this JSON to the blockchain. We put that JSON in IPFS, then IPFS gives us a URI and we put the URI in the blockchain. How?

```
ipfs add <filename>
```

This will return a hash. We put that hash in a URI like so: `https://ipfs.io/ipfs/QmQmtZPELKRYoUyDWfsrN5JwFQaSFxJsHtW1PrRPwhhtR8`. (This particular URI is JSON that lives on my M1 Macbook Air and is only accessible through my local IPFS gateway. In other words, it is a dev URI that only I have access to.)

## Minting an NFT

We can mint an NFT using [the Hardhat console][4]. Make sure to have your IPFS address ready before moving to this step.

```
> const Bender = await ethers.getContractFactory('StripperNFT');
undefined
> const bender = await Bender.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');
undefined
> y = await bender.mintNFT('0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199', 'https://ipfs.io/ipfs/QmQmtZPELKRYoUyDWfsrN5JwFQ
aSFxJsHtW1PrRPwhhtR8');
{
  hash: '0x1dcbafdc2f2d967a90833c4cc81a4b637357fa0a09638ce66fcb4c56ec439a43',
  type: 2,
  accessList: [],
  blockHash: '0x376cdc11aa2d6879786315094e5a92e367db53bcd1c4529e9a150eff9258f8b2',
  blockNumber: 1,
  transactionIndex: 0,
  confirmations: 1,
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  gasPrice: BigNumber { _hex: '0x342770c0', _isBigNumber: true },
  maxPriorityFeePerGas: BigNumber { _hex: '0x00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x4201eab3', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x5975', _isBigNumber: true },
  to: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  nonce: 0,
  data: '0xeacabe140000000000000000000000008626f6940e2eb28930efb4cef49b2d1f2c9c119900000000000000000000000000000000000000
00000000000000000000000040000000000000000000000000000000000000000000000000000000000000004368747470733a2f2f697066732e696f2
f697066732f516d516d745a50454c4b52596f557944576673724e354a774651615346784a734874573150725250776868745238000000000000000000
0000000000000000000000000000000000000000',
  r: '0xa4c856ffbcb5e8ae920fdd184d8455c5c27e279de7187f524a5ad69d87d3839a',
  s: '0x075d41b546cb279bbbecdf7ab1561ad79a35816829fef63894f32de2eaa9cfe7',
  v: 0,
  creates: null,
  chainId: 31337,
  wait: [Function (anonymous)]
}

```

[1]: docs/project-brief.md "Brief"
[2]: docs/project-plan.md "Plan"
[3]: https://docs.ipfs.io/install/command-line/#system-requirements "IPFS"
[4]: https://hardhat.org/guides/hardhat-console.html "Hardhat console"
