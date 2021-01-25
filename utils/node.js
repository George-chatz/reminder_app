const addNote =( myNote) =>{
    console.log(myNote)
}

const listNotes = () => {
    const allNotes =loadNotes();
    allNotes.map(note, index => {
        console.log(note.reminder[index]);
        console.log(`${index + 1}. ${note.reminder}`)
    });
 };

const removeNote = noteToDelete => {
    const allNotes = loadNotes();

    const notesToKeep=allNotes.filter(note => {
        return note.reminder != noteToDelete;
    });
    saveNotes(notesToKeep);
}



module.exports = {
    addNote,
    listNotes,
    removeNote
}