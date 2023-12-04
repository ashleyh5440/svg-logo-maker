class Shape {

    constructor(color, message, textColor) {
      this.color = color;
      this.message = message;
      this.textColor = textColor;
    } //these can be different names but they have the same value
  }
  
  // Circle class as a child of Shape
  class Circle extends Shape {
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.color}"/><text font-family = "impact" font-weight="bold" x="150" y="135" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.message}</text></svg>`}
  }
  
  // Triangle class as a child of Shape
  class Triangle extends Shape {
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 150,200 300,0" class="triangle" fill="${this.color}" /><text font-family = "impact" font-weight="bold" x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.message}</text></svg>`}
    }
  
  // Square class as a child of Shape
  class Square extends Shape {
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="5" width="200" height="200" fill="${this.color}" /><text font-family = "impact" font-weight="bold" x="150" y="135" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.message}</text></svg>`}
  }

  module.exports = {Circle, Triangle, Square}