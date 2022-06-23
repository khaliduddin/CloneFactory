const { ethers } = require("hardhat");

async function main() {

  //implementation contract address
  //let implementation = "0x43B869638cA5f6CF1175a31D32088fF047F3697c";
  
  //deploy implementation contract
  const ThingFactory = await ethers.getContractFactory("ThingFactory");
  const thing = await ThingFactory.attach("0x694725B17870B21912BfeCf56A5F6Ac650b4c54d");
  
  console.log('get clone name and symbol from contract!!');
  console.log("implementation:", await thing.implementation());
  console.log("Cloned Contracts count:", await thing.clonedContracts.length); 
  let count = await thing.contractCount();
  console.log('Contract Length -> ', count);
  //console.log("Cloned contract addresses:", await thing.clonedContracts()); 

  //const events = thing.events.getPastEvents('ThingCreated', {});
  //console.log("events -> ", events);

  const results = thing.filters.ThingCreated("0x694725B17870B21912BfeCf56A5F6Ac650b4c54d");
  console.log("results -> ", results);

  //GET CLONE DETAILS
  let clone = await thing.clonedContracts(count-1);
  console.log('Latest clone contract address -> ', clone);
  
  const Thing = await ethers.getContractFactory("Thing");
  const clonedThing = await Thing.attach(clone);
  
  console.log('get clone name and symbol from contract!!');
  console.log("Name:", await clonedThing.name());  
  console.log("Symbol:", await clonedThing.symbol()); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
