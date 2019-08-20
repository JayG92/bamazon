const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;

  connection.query("SELECT * FROM products", function (err, data) {
    console.table(data);
    start();
  });
});

function start() {
  connection.query("SELECT * FROM products", function (err, data) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "id",
          type: "list",
          choices: function () {
            var choiceArray = [];
            for (let i = 0; i < data.length; i++) {
              choiceArray.push(data[i].id);
            }
            return choiceArray;
          },
          message: "Please SELECT an #ID of the PRODUCT you'd like to PURCHASE",

        },
        {
          name: "quanity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ]).then(function (answer) {
       
        connection.query("SELECT * FROM products WHERE quantity", function (err, data) {
        });
        console.log(answer.choices);
        for (let i = 0; i < data.length; i++) 
        {
          if (data[i].id === answer.choices){}
        }
        let available_stock = data[0].quantity;
        if (available_stock >= answer.quanity) {
          console.log("Order proccessed")
          start();
        }
        else {
          console.log("Not enough in stock, Please try again!")
          start();
        }

      })
  })
};