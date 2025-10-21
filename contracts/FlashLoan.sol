// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract FlashLoan {
    string public message;

    constructor() {
        message = "FlashLoan contract deployed successfully!";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
