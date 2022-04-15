let bankBal = 1000;

//loops the whole program. didnt have enough time to make a quit scenario.
while (true) {
    let tranAmount;

    let action = prompt(`Welcome to da bank. you current have $${bankBal}. Would you like to 'deposit money' or 'withdraw money'? : `);
    action = action.toLowerCase();

    //judges the user based on negative or positive balances
    function moneyJudgement(n) {
        if (n < 0) {
            return "Low Funds.. yikes.";
        } else {
            return "You got monnneeeyy!!";
        }
    }

    // adds or subtracts money depending on first response
    if (action === 'deposit money') {
        tranAmount = prompt("How much would you like to deposit? ");
        tranAmount = parseFloat(tranAmount);

        bankBal = bankBal + tranAmount;
        alert(`You deposited $${tranAmount} and your total is now $${bankBal}. ${moneyJudgement(bankBal)}`);

    } else if (action === 'withdraw money') {
        tranAmount = prompt("How much would you like to withdraw? ");
        tranAmount = parseFloat(tranAmount);

        bankBal = bankBal - tranAmount;
        alert(`You deposited $${tranAmount} and your total is now $${bankBal}. ${moneyJudgement(bankBal)}`);
    }


}