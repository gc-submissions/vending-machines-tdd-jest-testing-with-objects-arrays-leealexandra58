const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem } = require("../src/js/cart-functions")




describe("calculate change tests", () => {
  test("total of $5 and payment of $6 will give a change back of $1", () => {

    // Arrange
    let total = 5;
    let payment = 6;

    // Act
    let result = calculateChange(total, payment);

    // Assert
    expect(result).toBe(1)


  });

  test("total of $12.30 and payment of $13.03 will give a change back of $0.73", () => {

    // Arrange
    let total = 12.30;
    let payment = 13.03;

    // Act
    let result = calculateChange(total, payment);

    // Assert
    expect(result).toBeCloseTo(0.73)


  });

  test("total of $12.30 and payment of $13.03 will give a change back of $0.73", () => {

    // Arrange
    let total = 7.05;
    let payment = 8.00;

    // Act
    let result = calculateChange(total, payment);

    // Assert
    expect(result).toBeCloseTo(0.95)

  });

});

describe("sufficient payment tests", () => {
  test("when total is $5 and payment is $6, sufficient payment is 'true'", () => {
    // Arrange
    let total = 5;
    let payment = 6;

    // Act
    let result = isSufficientPayment(total, payment);

    // Assert
    expect(result).toBe(true)

  });

  test("when total is $10 and payment is $7, sufficient payment is 'false'", () => {
    // Arrange
    let total = 10;
    let payment = 7;

    // Act
    let result = isSufficientPayment(total, payment);

    // Assert
    expect(result).toBe(false)
  });

  test("when total is $3 and payment is $3, sufficient payment is 'true'", () => {
    // Arrange
    let total = 3;
    let payment = 3;

    // Act
    let result = isSufficientPayment(total, payment);

    // Assert
    expect(result).toBe(true)
  });

  test("when total is $7 and payment is $5, sufficient payment is 'false'", () => {
    // Arrange
    let total = 7;
    let payment = 5;

    // Act
    let result = isSufficientPayment(total, payment);

    // Assert
    expect(result).toBe(false)
  });

});

describe("calculateTotal tests", () => {
  test("one item with price of $4.99 will return 4.99", () => {
    // Arrange
    const itemsArray = [{ name: "Beef Jerky", price: 4.99 }];

    // Act
    const result = calculateTotal(itemsArray);

    // Assert
    expect(result).toBe(4.99);

  });

  test("3 items with price of $3.50, $12.99, and $0.03 will return $16.52", () => {
    // Arrange
    const itemsArray = [{ name: "Skittles", price: 3.50 }, { name: "shirt", price: 12.99 }, { name: "Gum", price: 0.03 }];

    // Act
    const result = calculateTotal(itemsArray);

    // Assert
    expect(result).toBeCloseTo(16.52);

  });


  test("an empty array will return 0", () => {
    // Arrange
    const itemsArray = [];

    // Act
    const result = calculateTotal(itemsArray);

    // Assert
    expect(result).toBeCloseTo(0);

  });


  test("one item with price of $4.99 will return 4.99", () => {
    // Arrange
    const itemsArray = [{ name: "Soda", price: 1.49 }, { name: "Bag of Nuts", price: 4.60 }];

    // Act
    const result = calculateTotal(itemsArray);

    // Assert
    expect(result).toBeCloseTo(6.09);

  });

});


describe("add item tests", () => {
  test("add item with the name 'Beans' with the price of 3 as an object to the array", () => {
    // Arrange
    let itemsArray = [];
    let name = "Beans";
    let price = 3;
    
    
    // Act
    let result = addItem(itemsArray, name, price);

    // Assert
    expect(result).toEqual([{ name: "Beans", price: 3 }]);

  });

  test("add item with the name 'Sugar' with the price of 2 as an object to the array", () => {
    // Arrange
    let itemsArray = [{ name: "Beans", price: 3 }];
    let name = "Sugar";
    let price = 2;
    
    
    // Act
    let result = addItem(itemsArray, name, price);

    // Assert
    expect(result).toEqual([{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }]);

  });

  test("add item with the name 'Beans' with the price of 3 as an object to the array", () => {
    // Arrange
    let itemsArray = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name: "Eggs", price: 4 }];
    let name = "Bread";
    let price = 2.50;
        
    // Act
    let result = addItem(itemsArray, name, price);

    // Assert
    expect(result).toEqual([{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name: "Eggs", price: 4 }, { name: "Bread", price: 2.50 }]);

  });

});




describe("removeItem", () => {
  test("remove the first element from an array of three items", () => {
    // Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Gum", price: 1 }
    ];

    // Act
    let result = removeItem(itemsArray, 0);

    // Assert
    expect(result).toEqual([{ name: "Sugar", price: 2 }, { name: "Gum", price: 1 }]);

  });

  test("remove the last element from an array of three items", () => {
    // Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Gum", price: 1 }
    ];

    // Act
    let result = removeItem(itemsArray, 2);

    // Assert
    expect(result).toEqual([{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }]);
    
  });

  test("remove the middle element from an array of three items", () => {
    // Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Gum", price: 1 }
    ];

    // Act
    let result = removeItem(itemsArray, 1);

    // Assert
    expect(result).toEqual([{ name: "Beans", price: 3 }, { name: "Gum", price: 1 }]);
    
  });

  test("remove the only item in an array of one item", () => {
    // Arrange
    let itemsArray = [
      { name: "Gum", price: 1 }
    ];

    // Act
    let result = removeItem(itemsArray, 0);

    // Assert
    expect(result).toEqual([]);
    
  });
});