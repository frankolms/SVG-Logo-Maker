const fs = require("fs");
const inquirer = require("inquirer");
const createShape = require("./lib/shapes");
const questions = [
  {
    type: "input",
    name: "color",
    message: "Enter a color or a hexadecimal number.",
  },
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color for the text",
  },
  {
    type: "checkbox",
    name: "shape",
    message: "Pick a shape.",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function generateShape() {
  inquirer.prompt(questions).then(
    (data) =>
      fs.writeFile("log.txt", createShape(data), (err) =>
        err ? console.error(err) : console.log("Success!")
      )
    // createShape(data)
  );
}

generateShape();
