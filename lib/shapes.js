class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = (color);
    }
  }
  
  // Circle class as a child of Shape
  class Circle extends Shape {
    render() {
      return SVG().circle(100).fill(this.color).svg();
    }
  }
  
  // Triangle class as a child of Shape
  class Triangle extends Shape {
    render() {
      return SVG().polygon('50,0 100,100 0,100').fill(this.color).svg();
    }
  }
  
  // Square class as a child of Shape
  class Square extends Shape {
    render() {
      return SVG().rect(100, 100).fill(this.color).svg();
    }
  }

  module.exports = {Circle, Triangle, Square}