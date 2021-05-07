const { en, EN, LENGTH, Actions } = require('../const/const');

const decoder = (str, { shift, action }) => {
    const delta = shift % LENGTH;

    if (delta === 0) {
        return str;
    }

    const toTheRightEncode = action === Actions.encode.value && delta > 0;
    const toTheRigthDecode = action === Actions.decode.value && delta < 0;

    if (toTheRightEncode || toTheRigthDecode) {
        return coding(str, delta);
    }

    return coding(str, -delta);
}

const coding = (str, shift) => Array.from(str).map((char) => {
    if (en.includes(char)) {
        return newChar(en, char, shift);
    } else if (EN.includes(char)) {
        return newChar(EN, char, shift);
    }

    return char;
}).join('');

const newChar = (arr, char, shift) => {
    const index = arr.findIndex((letter) => letter === char);
    const newIndex = Math.abs((index + shift + LENGTH) % LENGTH);
    return arr[newIndex];
}

module.exports = {
    decoder,
}
