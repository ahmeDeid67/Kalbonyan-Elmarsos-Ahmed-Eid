// Challenge #1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] });
poll.displayResult.call({ answers: [5, 2, 3] }, "string");
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
