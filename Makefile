# -------------------------------
# Local Dev Environment
#
#   deploy
#     Requires that you run local_node first. Runs the hardhat deploy script. Deploys the contract onto the hardhat chain.
#
#   build
#     Compiles the contracts.
#
#   local_node
#     Must run in the foreground in its own terminal. Runs a local dev Hardhat blockchain.
# -------------------------------

foo:
	cd hh; \
		npx hardhat check

deploy:
	cd hh; \
		npx hardhat run scripts/sample-script.js

do:
	cd hh; \
		npx hardhat run scripts/do-contract.js

build:
	cd hh; \
		npx hardhat compile

local_node:
	cd hh; \
		npx hardhat node

# -------------------------------
# Install Dependencies
# -------------------------------

init:
	cd hh; \
		npm install
