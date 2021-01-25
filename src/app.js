

const yargs = require("yargs")
const {addNote} = require("../utils/node.js")
console.log(process.argv);
console.log(yargs.argv);



if (command="add"){ 
    console.log("adding note..");
    addNote(yargs.argv.note)
}else if (command="list") {
    console.log("adding list...");
}else {
    console.log("command not found");
}


