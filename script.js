function isSameType(value1, value2) {
  if (value1 === value2) {
    // Both values are NaN
    return false;
  }

  return true;
}

// Example usage
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

alert(isSameType(value1, value2));
