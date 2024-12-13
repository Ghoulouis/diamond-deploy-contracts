// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./A.sol";

contract A3 is A {
    function get() public view returns (uint256) {
        return box;
    }
}
