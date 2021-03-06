const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "Your notes.."
}

const addNote = function(title,body){
    const notes = loadNotes()

    //check for duplicate title

    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })

    if( duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
    else{
        console.log('Title already taken ,Note not added!')
    }
    
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }

}

const removeNotes = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter( function(note){
        return note.title !== title
    })
    if(notes.length === notesToKeep.length){
        console.log(chalk.green.inverse("No Note Removed!"))
    }
    else{
        console.log(chalk.red.inverse("Note Removed!"))
        saveNotes(notesToKeep)
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}