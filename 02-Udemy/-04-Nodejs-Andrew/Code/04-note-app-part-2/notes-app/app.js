import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getNotes, addNote, removeNote, listNotes, readNote } from "./notes.js";

// console.log(getNotes());

// console.log(chalk.green("success!"));
// console.log(chalk.red.inverse.bold("Error!!"));
// console.log(chalk.blue.inverse.bold("Message..."));

// console.log(process.argv[2]);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

// console.log(process.argv);

// yargs.version("1.1.0");

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
      // console.log("Title: " + argv.title);
      // console.log("Body: " + argv.body);
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

// console.log(yargs(hideBin(process.argv)).argv);
