const fs= require ('fs')

const person = {
    name : "George",
    age : 28,
    favColour: "blue"
};

const personJson = JSON.stringify(person);
console.log(person);
console.log(personJson);

fs.writeFileSync("json_demo/person.json",personJson);

const dataBuffer = fs.readFileSync("json_demo/person.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(dataBuffer);
console.log(data);


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("json_demo/notes.json")
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
        
    } catch (error) {
        return []
    }
};

const addNote = () => {
    const allNotes =loadNotes()
    allNotes = allNotes.push({reminder : myNote})
    saveNotes(allNotes);
}

const saveNotes = allNotes => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync ("src/notes.json", notesJson)
}

