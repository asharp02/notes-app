const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

// const command = process.argv[2]

// Customize yargs version

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log('List the notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading the note')
    }
})

// console.log(process.argv)
console.log(yargs.parse())
// if (command ==='add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

