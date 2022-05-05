// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Event {
    address public owner; 

    string public kind;
    string public id;
    uint public result;
    bool public is_end;
    uint public total_amount;
    uint public total_bids;
    uint public winners_count;
    uint public losers_count;
    uint public fee_amount;

    
    struct Bid {
        string event_id;
        uint amount;
        uint result;
    }

    // mapping(address => Bid) public bids; 
    // mapping(string => Event) public events; 

    constructor(string memory _id, string memory _kind, address payable _owner) {
        owner = _owner;
        id = _id; 
        kind = _kind; 

        is_end = false;
    }

} 

