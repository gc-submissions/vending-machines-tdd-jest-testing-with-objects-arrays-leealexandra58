const formatCurrency = (amount) => {
    
    if (amount >= 0) {
        return ("$" + amount.toFixed(2));
    } else {
        let num = (Math.abs(amount));
        return ("-$" + num.toFixed(2));
    }
}

exports.formatCurrency = formatCurrency;



const getCoins = (cents) => {
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    const object = {};

    while (cents >= 25) {
        cents -= 25;
        quarter++;
    }
    while (cents >= 10) {
        cents -= 10;
        dime++;
    }
    while (cents >= 5) {
        cents -= 5;
        nickel++;
    }
    while (cents > 0) {
        cents -= 1;
        penny++;
    }

    object.quarters = quarter;
    object.dimes = dime;
    object.nickels = nickel;
    object.pennies = penny;
    
    return object;
}

exports.getCoins = getCoins;