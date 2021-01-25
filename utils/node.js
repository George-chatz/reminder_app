const addNote =( myNote) =>{
    console.log(myNote)
}

const ListNotes = () => {
    const allNotes =loadNotes();
    allNotes.map(note, index => {
        console.log(note.reminder[index]);
        console.log(`${index + 1}. ${note.reminder}`)
    });
 };

 ListNotes()

module.exports = {
    addNote,
    ListNotes
}