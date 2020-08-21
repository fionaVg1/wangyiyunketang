const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('\nHello') + ' World' + chalk.red('!\n'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!\n'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz\n'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!\n'));