const chalk = require('chalk');

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

class Messager {
    static output({ message, color }) {
        console.log(message);
    }
    static outputCSS(message) {
        console.log(chalk.red(message));
        console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
        console.log(chalk.hex('#DEADED').bold('Bold gray!'));
        const miles = 18;
        const calculateFeet = miles => miles * 5280;

        console.log(chalk`
	{bgCyan There are {bold 5280 feet} in a mile.}
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);
    }
};

module.exports = {
    Messager,
};
