// console.log(process.argv);

const program = require("commander");
program.parse(process.argsv);

const filePath = program.args[0];
console.log(filePath);
