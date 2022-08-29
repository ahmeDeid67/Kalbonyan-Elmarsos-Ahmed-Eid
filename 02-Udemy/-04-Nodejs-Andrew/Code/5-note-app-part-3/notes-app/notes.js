import * as fs from "fs";
import chalk from "chalk";

export const getNotes = () => "Your notes...";

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("Adding new note");
  } else {
    console.log("The note was taken");
  }
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const filterNote = notes.filter((note) => note.title !== title);
  if (notes.length > filterNote.length) {
    console.log(chalk.bgGreen("Note removed!"));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
  saveNotes(filterNote);
};

export const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.bold("Your Notes"));

  notes.forEach((note) => console.log(note.title));
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const readNote = (title) => {
  const notes = loadNotes();
  const targetNote = notes.find((note) => note.title === title);

  if (targetNote) {
    console.log(chalk.bold.blue(targetNote.title));
    console.log(targetNote.body);
  } else {
    console.log(chalk.red("No note found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
