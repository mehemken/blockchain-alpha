const Web3 = require('web3')
const fs = require('fs')

console.log(Web3.version)

let abi = JSON.parse(
    fs.readFileSync(
        'artifacts/contracts_NotarizeDocument_sol_NotarizedDocument.abi'
    )
)

web3 = new Web3("http://localhost:8545")
const address = '0x3e1837562a907610b13856aa9fa6a5756648c3cb'

notorizedContract = new web3.eth.Contract(abi, address)

notorizedContract.methods.notarize("Hello World").send({
    from: '0xB3F57Ff72783c6c2E29263967e1bfE458F96369F',
}).then((f) => console.log(f));

notorizedContract.methods.checkDocument("Hello World").call(console.log)
notorizedContract.methods.checkDocument("Dope sauce").call(console.log)
