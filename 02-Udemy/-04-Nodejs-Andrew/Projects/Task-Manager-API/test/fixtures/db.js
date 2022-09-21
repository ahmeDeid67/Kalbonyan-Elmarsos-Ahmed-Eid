import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "../../src/models/user.js";
import Task from "../../src/models/task.js";

export const userOneId = new mongoose.Types.ObjectId();
export const userOne = {
  _id: userOneId,
  name: "Mike",
  email: "mike@example.com",
  password: "56what!!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

export const userTwoId = new mongoose.Types.ObjectId();
export const userTwo = {
  _id: userTwoId,
  name: "Jess",
  email: "jess@example.com",
  password: "myhouse099@@",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

export const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "First task",
  completed: false,
  owner: userOne._id,
};

export const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "Second task",
  completed: true,
  owner: userOne._id,
};

export const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "Third task",
  completed: true,
  owner: userTwo._id,
};

export const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};
