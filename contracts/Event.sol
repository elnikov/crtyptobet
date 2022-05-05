// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Event {
    address public owner; 

    enum State { Created, Ended }
    State public state;

    error InvalidResultValue();
    enum Result { Win, Lose}

    string public kind;
    string public id;
    
    uint public totalAmount;
    uint public totalBets;
    // uint public winners_count;
    // uint public losers_count;
    // uint public fee_amount;

    uint minBet;

    
    struct Bet {
        address owner;
        uint amount;
        Result result;
    }
    Bet[] public bets;


    error InvalidState();
    modifier inState(State state_) {
        if (state != state_)
            revert InvalidState();
        _;
    }

    function setBet(Result _result) public payable inState(State.Created) {
            require(msg.value > minBet, "Bet value must be positive");
            
            bets.push(Bet({
                owner: payable(msg.sender),
                amount: msg.value,
                result: _result
            }));

            totalAmount += msg.value;
            totalBets += 1;
    }

    constructor(string memory _id, string memory _kind, address payable _owner) {
        owner = _owner;
        id = _id; 
        kind = _kind; 
        state = State.Created;
        minBet = 0;
    }

} 

