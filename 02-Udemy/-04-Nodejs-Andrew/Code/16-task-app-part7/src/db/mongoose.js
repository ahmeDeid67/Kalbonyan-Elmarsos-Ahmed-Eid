import mongoose from "mongoose";
// import validator from "validator";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-apii");

// const User = mongoose.model("user", {
//   name: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     required: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid!");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("You should strength your password");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number!");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Ahmed",
//   age: 24,
// });

// const me = new User({
//   name: "Ahmed Eid",
//   email: "ahmed@example.com",
//   password: "password",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   });

// const Task = mongoose.model("task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task1 = new Task({
//   completed: false,
// });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((e) => {
//     console.log("Error!", e);
//   });
