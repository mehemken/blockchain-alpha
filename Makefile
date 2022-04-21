# -------------------------------------------------------
# Local Dev Environment
#
# -------------------------------------------------------
.PHONY: deploy compile hardhat ipfs init

# ----------------------------------
# NFT
# ----------------------------------

mint_nft:
	cd hh; \
		npx hardhat run scripts/mint-nft.js

# ----------------------------------
# Contract
# ----------------------------------

contract: compile deploy_to_local_chain

compile:
	cd hh; \
		npx hardhat compile

deploy_to_local_chain:
	cd hh; \
		npx hardhat run scripts/deploy-contract-to-local-chain.js

# ----------------------------------
# Utilities (required)
#   Run each of these in a separate terminal. These must be running for the Contract and NFT formulas to work.
# ----------------------------------

hardhat:
	cd hh; \
		npx hardhat node

ipfs:
	cd ipfs; \
		ipfs daemon

# ----------------------------------
# Install Dependencies
# ----------------------------------

init:
	cd hh; \
		npm install
