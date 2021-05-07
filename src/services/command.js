const { Command, Option, commander } = require('commander');

const program = new Command();
program.version('0.0.1');

program
    .option('-s, --shift <type>', 'shift') // , myParseInt)
    .option('-i, --input <type>', 'input')
    .option('-o, --output <type>', 'output')
    .option('-a, --action <type>', 'action');

program.parse(process.argv);
const options = program.opts();

module.exports = {
    options,
};
