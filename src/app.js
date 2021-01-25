

const yargs = require("yargs")
const {addNote,listNotes,removeNote} = require("../utils/note.js")

console.log(process.argv);
console.log(yargs.argv);

const command = process.argv[2]

if (command=="add"){ 
    console.log("adding note..");
    addNote(yargs.argv.note)
}else if (command=="list") {
    console.log("adding list...");
    listNotes();
}else if (command=="remove"){
    removeNote(yargs.argv.note)
}else {
    console.log("command not found");
    
}

