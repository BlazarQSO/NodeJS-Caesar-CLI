const { Command } = require('commander');
const { Messager } = require('./messager');

const program = new Command();

program
    .version('0.0.1')
    .option('-s, --shift <number>', 'shift')
    .option('-i, --input <file>', 'input')
    .option('-o, --output <file>', 'output')
    .option('-a, --action <encode|decode>', 'action')
    .configureOutput({
        writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
        writeErr: (str) => process.stderr.write(Messager.errorCommand(str)),
    });

program.parse(process.argv);
const options = program.opts();

module.exports = {
    options,
};
