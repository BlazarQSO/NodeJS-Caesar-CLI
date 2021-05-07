const { options } = require('./src/services/command');
const { validator } = require('./src/utils/validator');
const { decoder } = require('./src/utils/decoder');
const { EN } = require('./src/const/const');

class Messager {
    static output({ message, color }) {
        console.log(message);
    }
}

if (!validator(options)) {
    process.exit(2);
}

const temp = 'abcd.|ABCD';
console.log(decoder(temp, options));


Messager.output({ message: options });
