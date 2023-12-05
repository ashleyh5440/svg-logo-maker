const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes");

//function to generate the logo
function generateLogo({ text, textColor, shape, shapeColor }) {
  let shapeObject;

  //switch statement to shape object based on user input
  switch (shape) {
    case 'circle':
      shapeObject = new Circle(shapeColor, text, textColor);
      break;
    case 'triangle':
      shapeObject = new Triangle(shapeColor, text, textColor);
      break;
    case 'square':
      shapeObject = new Square(shapeColor, text, textColor);
      break;
    default:
      throw new Error('Invalid shape');
  }
  //main SVG, works like a container for the shape
  const shapeSvg = shapeObject.render();
  return shapeSvg
}

// questions for user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: "Enter 3 characters to appear in your logo.",
      validate: (text) => text.length <= 3 || "Text cannot be longer than three characters."
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