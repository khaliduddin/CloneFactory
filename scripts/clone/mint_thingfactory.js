const { ethers, upgrades } = require("hardhat");

async function main() {

  //implementation contract address
  //let implementation = "0x43B869638cA5f6CF1175a31D32088fF047F3697c";
  
  //deploy implementation contract
  const ThingFactory = await ethers.getContractFactory("ThingFactory");
  const thing = await ThingFactory.attach("0x694725B17870B21912BfeCf56A5F6Ac650b4c54d");
  
  //console.log('set Implementation contract!!');
  //await thing.setImplAddress(implementation);

  console.log("Thing Factory .. Get Implementation Address:", await thing.implementation());  

  //let cloneAddr = 
  await thing.createThing("Test of Flown1", "FLOWN1");
  //console.log('New Clone is created => ', cloneAddr);
  //console.log('New Clone is created => ', await thing.clonedContracts(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
