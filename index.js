// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//need to add the prompts and questions
//need a function to create the file based on user answers
//need to save file to dist folder
//need 4 classes for shape, triangle, circle, and square
//need tests for each class using Jest

const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes");

// questions for user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: "Enter 3 characters to appear in your logo."
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter a color keyword OR a hexadecimal number for the text color."
      },
      {
        type: 'list',
        name: 'shape',
        message: "Choose a shape:",
        choices: ["circle", "triangle", "square"]
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: "Enter a color keyword OR a hexadecimal number for the shape color."
      }
  ])
  .then((answers) => {
    //user feed back
    console.log(answers);
    const logo = generateLogo(answers);
    fs.writeFile("dist/logo.svg", logo, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully created logo");
      }
    });
   })