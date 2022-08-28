const { formatCurrency, getCoins } = require("../src/js/money-functions");


describe("format currency tests", () => {
  test("given the amount of 0 will return '$0.00'", () => {
    // Arrange
    let amount = 0;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("$0.00")

  });

  test("given the amount of 1 will return '$1.00'", () => {
    // Arrange
    let amount = 1;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("$1.00")

  });

  test("given the amount of 1.5 will return '$1.50'", () => {
    // Arrange
    let amount = 1.5;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("$1.50")

  });

  test("given the amount of 0.01 will return '$0.01'", () => {
    // Arrange
    let amount = 0.01;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("$0.01")

  });

  test("given the amount of 527.6789 will return '$527.68'", () => {
    // Arrange
    let amount = 527.6789;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("$527.68")

  });

  test("given the amount of -1 will return '-$1.00'", () => {
    // Arrange
    let amount = -1;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("-$1.00");

  });

  test("given the amount of 202.445139 will return '$202.45'", () => {
    // Arrange
    let amount = 202.445139;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("$202.45");

  });

  test("given the amount of -50.7894 will return '-$50.79'", () => {
    // Arrange
    let amount = -50.7894;

    // Act
    let result = formatCurrency(amount);

    // Assert
    expect(result).toBe("-$50.79");

  });

});

describe("get coins tests", () => {
  test("32 cents will return 1 quarter, 0 dimes, 1 nickel, 2 pennies", () => {
    // Arrange
    let cents = 32;

    // Act
    let result = getCoins(cents);

    // Assert
    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 1, pennies: 2 });
    
  });

  test("10 cents will return 0 quarter, 1 dimes, 0 nickel, 0 pennies", () => {
    // Arrange
    let cents = 10;

    // Act
    let result = getCoins(cents);

    // Assert
    expect(result).toEqual({ quarters: 0, dimes: 1, nickels: 0, pennies: 0 });
    
  });

  test("27 cents will return 1 quarter, 0 dimes, 0 nickel, 2 pennies", () => {
    // Arrange
    let cents = 27;

    // Act
    let result = getCoins(cents);

    // Assert
    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 0, pennies: 2 });
    
  });

  test("68 cents will return 2 quarter, 1 dimes, 1 nickel, 3 pennies", () => {
    // Arrange
    let cents = 68;

    // Act
    let result = getCoins(cents);

    // Assert
    expect(result).toEqual({ quarters: 2, dimes: 1, nickels: 1, pennies: 3 });
    
  });
});