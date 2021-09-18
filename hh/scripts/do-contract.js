const hre = require('hardhat');
const fs = require('fs');

/* -------------------------------
 * Change these addresses
 ------------------------------- */

const acct1 = '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199';
const acct2 = '0xdd2fd4581271e230360230f9337d5c0430bf44c0';
const acct3 = '0xbda5747bfd65f08deb54cb465eb87d40e51b197e';
const bender_bending_rodriguez = {
  "attributes": [
    {
      "trait_type": "Composition",
      "value": "Forty percent titanium"
    },
  ],
  "description": "Walk up to the club like whaddup bite my shiny metal ass.",
  "image": "https://static.wikia.nocookie.net/villains/images/f/f6/Bender_Bending_Rodr%C3%ADguez_Sr..jpg/revision/latest/scale-to-width-down/250?cb=20150929211110",
  "name": "Ramses"
}


async function main() {
    const addr = fs.readFileSync('contract-address.txt', 'utf8', (err, addr) => {
        if (err) {
            console.log('err')
            console.error(err)
            return
        };
    });
    console.log('Address: ', addr);
    const StripperNFT = await hre.ethers.getContractFactory('StripperNFT');
    const stripper = await StripperNFT.attach(addr);
    await stripper.mintNFT(acct1, bender_bending_rodriguez);
};

main()
  .then(() => {
      process.exit(0);
  })
  .catch((error) => {
      console.log(error);
      process.exit(1);
  });
