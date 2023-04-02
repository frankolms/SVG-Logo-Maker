class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `${this.color}`;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    console.log(this);
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    console.log(this);
  }
}

function createShape(data) {
  console.log(typeof data);
  console.log(data);
  console.log(data.shape[0]);
  if (data.shape[0] === "Circle") {
    const newCircle = new Circle(data.color, data.text, data.textColor);
    console.log(newCircle);
    newCircle.render();
  } else if (data.shape[0] === "Square") {
    const newSquare = new Square(data.color, data.text, data.textColor);
    newSquare.render();
  } else if (data.shape[0] === "Triangle") {
    const newTriangle = new Triangle(data.color, data.text, data.textColor);
    newTriangle.render();
  }
}

module.exports = createShape;
