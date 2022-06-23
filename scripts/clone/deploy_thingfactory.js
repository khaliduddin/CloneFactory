const { ethers, upgrades } = require("hardhat");

async function main() {

  //implementation contract address
  let implementation = "0x43B869638cA5f6CF1175a31D32088fF047F3697c";
  
  //deploy implementation contract
  const ThingFactory = await ethers.getContractFactory("ThingFactory");
  const thing = await ThingFactory.deploy(implementation);

  console.log('starting deployment of Thing Factory contract!!');
  await thing.deployed();

  console.log("Thing Factory deployed to:", thing.address);  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
