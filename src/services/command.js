const { Command } = require('commander');
const { Messager } = require('./messager');

const program = new Command();

program
    .version('0.0.1')
    .option('-s, --shift <type>', 'shift')
    .option('-i, --input <type>', 'input')
    .option('-o, --output <type>', 'output')
    .option('-a, --action <type>', 'action')
    .configureOutput({
        writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
        writeErr: (str) => process.stdout.write(Messager.errorCommand(str)),
    });

program.parse(process.argv);
const options = program.opts();

module.exports = {
    options,
};
