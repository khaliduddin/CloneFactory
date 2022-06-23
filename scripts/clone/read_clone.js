const { ethers, upgrades } = require("hardhat");

async function main() {

  //implementation contract address
  let clone = "0x4142736D026D039d413125FAd7020d14EC83eD5E";
  
  //deploy implementation contract
  const Thing = await ethers.getContractFactory("Thing");
  const thing = await Thing.attach(clone);
  
  console.log('get clone name and symbol from contract!!');
  console.log("Name:", await thing.name());  
  console.log("Symbol:", await thing.symbol()); 
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
