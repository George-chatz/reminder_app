

const yargs = require("yargs")
const {addNote,ListNotes} = require("../utils/node.js")

console.log(process.argv);
console.log(yargs.argv);

const command = process.argv[2]

if (command="add"){ 
    console.log("adding note..");
    addNote(yargs.argv.note)
}else if (command="list") {
    console.log("adding list...");
    ListNotes();
}else {
    console.log("command not found");
}

console.log(ListNotes);