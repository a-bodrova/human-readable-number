module.exports = function toReadable(number) {
    const readableNumbers = {
        0: '',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let str = number.toString();
    let result = '';

    if (number === 0) return 'zero';
    if (number === 1000) return 'one thousand';

    if (number < 0 || number > 1000) {
        return "Sorry, it's not work that";
    }

    if (number < 21) {
        result = readableNumbers[number];
    }

    if (number > 20 && str.length === 2) {
        result = readableNumbers[str[0] * 10] + ' ' + readableNumbers[str[1]];
    }

    if (str.length === 3) {
        if (str[1] === '0') {
            result = readableNumbers[str[0]] + ' hundred ' + readableNumbers[str[2]];
        }

        if (str[1] === '0' && str[2] === '0') {
            result = readableNumbers[str[0] + ' hundred'];
        }

        if (Number(str[1] + str[2]) < 21) {
            result = readableNumbers[str[0]] + ' hundred ' + readableNumbers[Number(str[1] + str[2])];
        }
        
        if (Number(str[1] + str[2]) > 20) {
            result = readableNumbers[str[0]] + ' hundred ' + readableNumbers[str[1] * 10] + ' ' + readableNumbers[str[2]];
        }
    }

    return result.trim();
      }