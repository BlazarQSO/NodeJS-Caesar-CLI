const { Transform } = require('stream');
const { decoder } = require('../utils/decoder');
const { Actions } = require('../const/const');
const { Messager } = require('./messager');

class Transformer extends Transform {
    constructor(shift, action) {
        super();
        this.shift = shift;
        this.action = action;
    }

    _transform(chunk, encoding, callback) {
        const chunkStr = chunk.toString('utf8');
        const resultCoding = decoder(chunkStr, this.shift, this.action);
        this.push(resultCoding);
        callback();
    }
}

const endedPipeline = (error, action) => {
    if (error) {
        Messager.errorCommand('Error: stream is failed');
        process.exit(1);
    }

    if (action === Actions.encode.value) {
        Messager.encodeCompleted('Encoding completed!');
    } else {
        Messager.decodeCompleted('Decoding completed!');
    }
}

module.exports = {
    Transformer,
    endedPipeline,
}
