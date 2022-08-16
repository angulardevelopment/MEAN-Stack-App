// Database name: EmployeeDB

// Collection name: Employee

// Documents
// {
//             {Employeeid : 1, Employee Name : Guru99},
//             {Employeeid : 2, Employee Name : Joe},
//             {Employeeid : 3, Employee Name : Martin},
// }

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

const app = express();
const mongoose = require("mongoose");

mongoose.connection.on("error", (err) => {
  console.log(err);
});

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  const db = client.db("angular");
  const collName = "Employee";
  if (err) throw err;
  // var dbo = db.db("angular7crud");
  db.collections(collName, function (err, names) {
    const exist = names.length > 0;
    console.log("Exists: ", names.length > 0);
    if (!exist) {
      db.createCollection("Employee", function (err, res) {
        console.log();
        if (err) throw err;
        console.log("Collection created!");
        console.log(res.insertedCount, "works in insertmany");
      });
    }
  });

  db.collection("Employee").updateOne(
    {
      EmployeeName: "NewEmployee",
    },
    {
      $set: {
        EmployeeName: "Mohan",
      },
    }
  );

  db.collection("Employee").insertOne(
    {
      Employeeid: 4,
      EmployeeName: "NewEmployee",
    },
    function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    }
  );

  db.collection("Employee").deleteOne({
    EmployeeName: "Mohan",
  });

  db.collection("Employee").findOne({}, function (err, result) {
    if (err) throw err;
    // console.log(result, 'result');
  });

  db.collection("Employee")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      // console.log(result, 'rwulll');
    });
});
