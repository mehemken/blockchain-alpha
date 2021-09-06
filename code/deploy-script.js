const Web3 = require('web3')
const fs = require('fs')

console.log(Web3.version)

let bc = fs.readFileSync(
    'artifacts/contracts_NotarizeDocument_sol_NotarizedDocument.bin'
).toString()

let abi = JSON.parse(
    fs.readFileSync(
        'artifacts/contracts_NotarizeDocument_sol_NotarizedDocument.abi'
    )
)

web3 = new Web3("http://localhost:8545")

notorizedContract = new web3.eth.Contract(abi)

notorizedContract.deploy({
    data: bc,
}).send({
    from:'0xDd7E331E4e40319c37bdca8FC63Ba71574f6195B',
    gas:1500000,
    gasPrice:web3.utils.toWei('0.00003', 'ether'),
}).then((newContractInstance) => {
    notorizedContract.options.address=newContractInstance.options.address
});

console.log(`address: ${notorizedContract.options.address}`)
