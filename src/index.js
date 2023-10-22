module.exports = function toReadable (number) {
  const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  const pastTen = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };

  const tens = {
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  const str = String(number);

  switch (str.length) {
    case 1:
      return getPrimitives(str);
    case 2:
      return `${doTens(str)}${addPrimitive(str)}`;
    case 3:
      return `${makeHundred(str)}${addPrimitive(str.slice(1))}`;
    default:
      return "Error";
  }

  // 0 - 9
  function getPrimitives(key) {
    return numbers[key];
  }

  function doTens(x) {
    const first = x[0];

    if (first === "1") {
      return getPastTen(x);

    } else {
      return getTens(first);
    }
  }

  function addPrimitive(x) {
    const first = x[0];
    const last = x.slice(1);

    if (first > 1 && last !== "0") {
      return ` ${getPrimitives(last)}`;
    } else {
      return "";
    }
  }

    // 10-19
  function getPastTen(key) {
    return pastTen[key];
  }

  // 2*- 9*
  function getTens(key) {
    return tens[key];
  }

  function makeHundred(x) {
    const first = x[0];
    const last = x.slice(1);

    if (last === "00") {
      return `${getPrimitives(first)} hundred`
    } else {
      return `${getPrimitives(first)} hundred ${addNumber(last)}`
    }
  }

  function addNumber(x) {
    if (x < 10) {
      return `${getPrimitives(x[1])}`
    } else {
      return doTens(x);
    }
  }
}
