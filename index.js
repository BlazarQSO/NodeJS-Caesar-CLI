const { options } = require('./src/services/command');
const { validator } = require('./src/utils/validator');
const { pipeline } = require('stream');
const { Transformer, endedPipeline } = require('./src/services/transformer');

const fs = require('fs');

if (validator(options)) {
    process.exit(2);
}

const { input, output, shift, action } = options;

pipeline(
    input ? fs.createReadStream(input) : process.stdin,
    new Transformer(shift, action),
    output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
    (error) => endedPipeline(error, action),
);
