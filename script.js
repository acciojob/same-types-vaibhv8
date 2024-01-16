function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    // Both values are NaN
    return true;
  }

  return typeof value1 === typeof value2;
}

// Example usage
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

alert(isSameType(value1, value2));

