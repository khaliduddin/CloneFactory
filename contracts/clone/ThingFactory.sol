// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import './Thing.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract ThingFactory is Ownable {

    address public implementation;
    address[] public clonedContracts;

    event ThingCreated(address indexed newThingAddress);

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function setImplAddress(address _implementation) public onlyOwner {
        implementation = _implementation;
    }

    //string memory _name, string memory _symbol
    function createThing(string memory thingName, string memory thingSymbol) public onlyOwner { //returns (address){
        address clone = Clones.clone(implementation);
        
        Thing newThing = Thing(clone);
        newThing.initialize(thingName, thingSymbol);
        
        clonedContracts.push(clone);
        
        emit ThingCreated(clone);

        //return clone;
    }

    function contractCount() external view returns(uint) {
        return clonedContracts.length;
    }

    function getAddress(uint index) view public returns (address) {
        return clonedContracts[index];        
    }
}