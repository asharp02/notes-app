//notes.js
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes..."

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
        title: title,
        body: body
    })
    } else {
        console.log('Note title taken')
    }

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter((note) => note.title !== title)
    if (newNotes.length !== notes.length) {
        console.log(chalk.green.inverse("Note Removed!"))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    saveNotes(newNotes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }

}

const listNotes = () => {
    console.log(chalk.yellow.inverse('Your Notes:'))
    notes = loadNotes()
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    notes = loadNotes()
    note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Error: Note not found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}