// CRUD (create, read, update, delete)

import { MongoClient, ObjectId } from "mongodb";

// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    /////// CREATE

    // db.collection("users").insertOne(
    //   {
    //     name: "Careem",
    //     age: 34,
    //   },
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert user");

    //     console.log(result);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Hamada",
    //       age: 25,
    //     },
    //     {
    //       name: "Ahmed eid",
    //       age: 26,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert user");

    //     console.log(result);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Finish kalbonyan elmarsos",
    //       completed: false,
    //     },
    //     {
    //       description: "Do my home work",
    //       completed: false,
    //     },
    //     {
    //       description: "Clean my bed",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert tasks");

    //     console.log(result);
    //   }
    // );

    //////////////////////// FIND

    // db.collection("users").findOne(
    //   { _id: new ObjectId("63284e9f7fa0b9a2aa7f45ca") },
    //   (error, user) => {
    //     if (error) return console.log("Unable to fetch");

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ name: "Ahmed" })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ name: "Ahmed" })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectId("63284e9f7fa0b9a2aa7f45ce") },
    //   (error, task) => {
    //     if (error) return console.log("Unable to fetch");

    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    ///////////// UPDATE

    // const updateUser = db.collection("users").updateOne(
    //   { _id: new ObjectId("63265596fe7a0e21618ad06d") },
    //   {
    //     // $set: {
    //     //   name: "Mike",
    //     // },
    //     $inc: {
    //       age: 3,
    //     },
    //   }
    // );

    // updateUser
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    ////////////////// DELETE

    // db.collection("users")
    //   .deleteMany({ name: "Ahmed Eid" })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    db.collection("tasks")
      .deleteMany({ completed: true })
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }
);
