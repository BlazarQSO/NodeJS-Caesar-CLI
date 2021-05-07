const { Transform } = require('stream');
const { decoder } = require('../utils/decoder');
const { Actions } = require('../const/const');

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
        console.error('Error: stream is failed');
        process.exit(2);
    }

    if (action === Actions.encode.value) {
        console.log('Encoding completed!');
    } else {
        console.log('Decoding completed!');
    }
}

module.exports = {
    Transformer,
    endedPipeline,
}
