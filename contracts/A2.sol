// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./A.sol";

contract A2 is A {
    function down() public {
        box -= 1;
    }
}
