// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./A.sol";

contract A1 is A {
    function up() public {
        box += 1;
    }
}
