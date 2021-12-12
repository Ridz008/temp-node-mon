const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);







// // const chalk = require('chalk')
// // const yargs = require('yargs')
// // const notes = require('./notes.js')

// const msj = getNotes()
//console.log(chalk.red.bold.inverse(msj,' Hmm'))
// command line args
// const wht = console.log(process.argv)

// customize yargs
// // yargs.version('1.1.0')

// Create add command    
// // yargs.command({
// //     command: 'add',
// //     describe: 'Add a new Note',
// //     builder: {
// //         title: {
// //             describe: 'Note title',
// //             demandOption: true,
// //             type: 'string'
// //         },
// //         body: {
// //             describe: 'Note body',
// //             demandOption: true,
// //             type: 'string'
// //         }
        
// //     },
    
// //     handler: function(argv){
// //         notes.addNote(argv.title,argv.body)
// //         // console.log("Title: "+argv.title)
// //         // console.log('Body: '+argv.body)
// //     }
// // })

// create remove command
// // yargs.command({
// //     command: 'remove',
// //     describe: 'Remove Note',
// //     builder: {
// //         title: {
// //             describe: 'Note title',
// //             demandOption: true,
// //             type: 'string'
// //         }
// //     },
// //     handler: function(argv) {
// //         notes.removeNotes(argv.title)
// //         // console.log("Removing a Note")
// //     }
// // })

// create list note
// // yargs.command({
// //     command: 'list',
// //     describe: 'Listing  Notes',
// //     handler: function() {
// //         console.log("List of Notes")
// //     }
// // })

//create read note
// // yargs.command({
// //     command: 'read',
// //     describe: 'Read Note',
// //     handler: function() {
// //         console.log("Reading a Note")
// //     }
// // })
// // yargs.parse()
// console.log(yargs.argv)

//------------------

// const fs = require('fs')
// fs.writeFileSync('notes.txt','Checking node with synchronous')

// fs.appendFileSync('notes.txt','\n well some appended text here.\n')
//------------------
// const addit = require('./utils.js')

// console.log('Hi there!')
// console.log(addit(10,5))
//------------------
// const validator = require('validator')
// const getnotes = require('./notes.js')

// console.log(getnotes())
// console.log(validator.isEmail('ridz@jj'))

//------------------

// package.json

// "chalk": "^2.4.1",
// "eslint": "^6.6.0",
// "validator": "^10.8.0",
// "yargs": "^14.2.0"