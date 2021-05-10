const chalk = require('chalk');

class Messager {
    static warning = chalk.hex('#FFA500');
    static error = chalk.red;
    static text = chalk.hex('#143CDC');
    static bg = chalk.bgWhiteBright;
    static bold = chalk.bold;
    static success = chalk.green;

    static errorCommand(str) {
        return this.bold(`
        ${this.error('[ERR]')} ${this.warning(str)}
`);
    }

    static errorRequired(str) {
        process.stderr.write(this.bg(`${this.error('[ERR]')} ${this.warning(str)}\n`));
    }

    static isNotIntager(str) {
        process.stderr.write(`${this.error('[ERR]')} ${this.warning(str)}\n`);
    }

    static errorAction(str) {
        process.stderr.write(`${this.error('[ERR]')} ${this.bold(str)}\n`);
    }

    static errorPath(start = '', str = '', end = '') {
        const message = `${this.text(start)} ${this.bold(str)} ${this.text(end)}`;
        process.stderr.write(`${this.error('[ERR]')} ${message}\n`);
    }

    static decodeCompleted(str) {
        process.stderr.write(`${this.text(str)}\n`);
    }

    static encodeCompleted(str) {
        process.stderr.write(`${this.success(str)}\n`);
    }
};

module.exports = {
    Messager,
};
