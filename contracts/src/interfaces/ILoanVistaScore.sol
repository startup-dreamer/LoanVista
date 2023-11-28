// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ILoanVistaScore {
    function getScore(address user) external view returns (uint16);
}
