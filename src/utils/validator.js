const fs = require('fs');

const validator = ({ action, shift, input, output }) => {
    const res = { resultValidation: true };

    validShift(shift, res);
    validAction(action, res);
    validPath(input, res);
    validPath(output, res);

    return res.resultValidation;
};

const validShift = (shift, res) => {
    if (!shift) {
        res.resultValidation = false;
        console.log('error: there is no command --shift');
    }
    if (shift && shift % 1 > 0) {
        res.resultValidation = false;
        console.log('error: shift is not a integer');
    }
};

const validAction = (action, res) => {
    if (!action) {
        res.resultValidation = false;
        console.log('error: there is no command --action');
    }
    if (action && action !== 'encode' && action !== 'decode') {
        res.resultValidation = false;
        console.log(`error: action must be 'encode' or 'decode'`);
    }
};

const validPath = (path, res) => {
    if (!path) {
        return;
    }

    const withDotPath = (path[0] === '/') ? `.${path}` : path;
    if (!fs.existsSync(withDotPath)) {
        res.resultValidation = false;
        console.log(`error: path '${path}' is not valid`)
    }
}

module.exports = {
    validator,
};
