const hre = require('hardhat');
const fs = require('fs');

/* -------------------------------
 * Change these addresses
 ------------------------------- */

const nft_json = 'https://ipfs.io/ipfs/QmQmtZPELKRYoUyDWfsrN5JwFQ'

async function main() {
    const addr = fs.readFileSync('contract-address.txt', 'utf8', (err, addr) => {
        if (err) {
            console.log('err')
            console.error(err)
            return
        };
    });

    const [owner, addr1, addr2] = await hre.ethers.getSigners();
    console.log('acct: ', addr1.address)

    const StripperNFT = await hre.ethers.getContractFactory('StripperNFT');
    const stripper = await StripperNFT.attach(addr);
    res = await stripper.mintNFT(addr1.address, nft_json);
    console.log(res)
};

main()
  .then(() => {
      process.exit(0);
  })
  .catch((error) => {
      console.log(error);
      process.exit(1);
  });
