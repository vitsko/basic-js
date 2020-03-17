module.exports = function repeater(str, options) {
    if (options.separator === undefined) {
        options.separator = '+';
    }

    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }

    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }

    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }

    if (options.addition === undefined) {
        options.additionRepeatTimes = 0;
    }

    let newString = '';

    for (let i = 0; i < options.repeatTimes; ++i) {
        newString += str;

        for (let j = 0; j < options.additionRepeatTimes; ++j) {
            newString += options.addition;

            if (j < options.additionRepeatTimes - 1) {
                newString += options.additionSeparator;
            }
        }

        if (i < options.repeatTimes - 1) {
            newString += options.separator;
        }
    }

    return newString;
};