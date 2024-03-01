const yargs = require('yargs');
const {initializeApp, viewConfiguration, updateConfiguration, generateToken } = require('./commands');

yargs
    .command('initialize', 'Initialize the application', () => {
        initializeApp();
    })
    .command('view-config', 'View the current configuration', () => {
        viewConfiguration();
    })
    .command('update-config', 'Update the configuration', (yargs) => {
        yargs.option('key', {
            describe: 'The key to update',
            demandOption: true,
            type: 'string'
        }).option('value', {
            describe: 'The value to set',
            demandOption: true,
            type: 'string'
        });
    }, (argv) => {
        updateConfiguration(argv.key, argv.value);
    })
    .command('generate-token <username>', 'Generate a token for a user', (yargs) => {
        yargs.positional('username', {
          describe: 'The username of the user',
          type: 'string'
        });
      }, (argv) => {
        generateToken(argv.username);
      })
      .demandCommand() 
      .help() 
      .argv;