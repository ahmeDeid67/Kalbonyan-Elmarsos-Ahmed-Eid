import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNote, removeNote, listNotes, readNote } from "./notes.js";

// add note
yargs(hideBin(process.argv))
  .command({
    command: "add",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    describe: "Adding a new note!",
    handler(argv) {
      addNote(argv.title, argv.body);
    },
  })
  .parse();

// remove note
yargs(hideBin(process.argv))
  .command({
    command: "remove",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    describe: "remove note",
    handler(argv) {
      removeNote(argv.title);
    },
  })
  .parse();

// list note
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "list note",
    handler() {
      listNotes();
    },
  })
  .parse();

// Read note
yargs(hideBin(process.argv))
  .command({
    command: "read",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    describe: "read note",
    handler(argv) {
      readNote(argv.title);
    },
  })
  .parse();
