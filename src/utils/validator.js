const fs = require('fs');
const { Actions } = require('../const/const');
const { Messager } = require('../services/messager');

const validator = ({ action, shift, input, output }) => {
    const res = { isNotValid: false };

    validShift(shift, res);
    validAction(action, res);
    validPath(input, res);
    validPath(output, res);

    return res.isNotValid;
};

const validShift = (shift, res) => {
    if (!shift) {
        res.isNotValid = true;
        Messager.errorRequired('error: there is no command --shift');
    }
    if (shift && shift % 1 > 0) {
        res.isNotValid = true;
        Messager.isNotIntager('error: shift is not a integer');
    }
};

const validAction = (action, res) => {
    if (!action) {
        res.isNotValid = true;
        Messager.errorRequired('error: there is no command --action');
    }
    if (action && action !== Actions.encode.value && action !== Actions.decode.value) {
        res.isNotValid = true;
        Messager.errorAction(`error: action must be 'encode' or 'decode'`);
    }
};

const validPath = (path, res) => {
    if (!path) {
        return;
    }

    const withDotPath = (path[0] === '/') ? `.${path}` : path;
    if (!fs.existsSync(withDotPath)) {
        res.isNotValid = true;
        Messager.errorPath('error: path', path, 'is not valid');
    }
}

module.exports = {
    validator,
};
