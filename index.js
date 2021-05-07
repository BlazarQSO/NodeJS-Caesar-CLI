const { CONST } = require('./src/const/const');
const { options } = require('./src/services/command');
const { validator } = require('./src/utils/validator');

class Messager {
    static output({ message, color }) {
        console.log(message);
    }
}

if (!validator(options)) {
    process.exit(2);
}

Messager.output({ message: options });
