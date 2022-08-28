const calculateChange = (total, payment) => {
    let change = payment - total;

    return change;
}

exports.calculateChange = calculateChange




const isSufficientPayment = (total, payment) => {
    if (total <= payment) {
        return true;
    } else {
        return false;
    }

}

exports.isSufficientPayment = isSufficientPayment;



const calculateTotal = (itemsArray) => {
    let sum = 0;

    for (const element of itemsArray) {
        sum += element.price;
    }
    
    return sum;
}

exports.calculateTotal = calculateTotal;



const addItem = (itemsArray, name, price) => {
    const object = {};
    object.name = name;
    object.price = price;

    itemsArray.push(object);
    return itemsArray;
}

exports.addItem = addItem;


const removeItem = (itemsArray, index) => {
    if (index > -1) {
        itemsArray.splice(index, 1);
    }
    return itemsArray;
};

exports.removeItem = removeItem;