const { ethers, upgrades } = require("hardhat");

async function main() {
  
  //deploy implementation contract
  const Thing = await ethers.getContractFactory("Thing");
  const thing = await Thing.deploy("Implementation", "IMPL");

  console.log('starting deployment of Thing implementation contract!!');
  await thing.deployed();

  console.log("Thing Implementation deployed to:", thing.address);  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
