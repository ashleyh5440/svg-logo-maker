const {
    Circle, Square, Triangle
} = require("./shapes")

test("Should render an SVG for a blue circle with white text.", () => {
    const expected = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="blue"/><text font-family = "impact" font-weight="bold" x="150" y="135" font-size="90" text-anchor="middle" fill="white">jjj</text></svg>'

    const circle = new Circle("blue", "jjj", "white")
    expect (circle.render()).toEqual(expected)
})

test("Should render an SVG for a purple triangle with red text.", () => {
    const expected = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 150,200 300,0" class="triangle" fill="purple" /><text font-family = "impact" font-weight="bold" x="150" y="100" font-size="60" text-anchor="middle" fill="red">aaa</text></svg>'

    const triangle = new Triangle("purple", "aaa", "red")
    expect (triangle.render()).toEqual(expected)
})

test("Should render an SVG for a white square with brown text.", () => {
    const expected = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="5" width="200" height="200" fill="white" /><text font-family = "impact" font-weight="bold" x="150" y="135" font-size="80" text-anchor="middle" fill="brown">bbb</text></svg>'

    const square = new Square("white", "bbb", "brown")
    expect (square.render()).toEqual(expected)
})