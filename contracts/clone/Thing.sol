// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Thing {

    string public name;
    string public symbol;

    constructor (string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    function initialize(string memory _name, string memory _symbol) public {
        name = _name;
        symbol = _symbol;
    }
}