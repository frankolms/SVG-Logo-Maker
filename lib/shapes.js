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
    return `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="200" stroke="${this.color}" fill="${this.color}"/>;
    <text x="50%" y="54%" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="250" height="350" xmlns="http://www.w3.org/2000/svg">
      <rect width="250" height="250" stroke="${this.color}" fill="${this.color}" />
      <text x="50%" y="42%" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
		    <polygon points="250,60 100,400 400,400" stroke="${this.color}" fill="${this.color}" />
        <text x="50%" y="72%" text-anchor="middle" fill="${this.textColor}" font-size="100px" font-family="Arial">${this.text}</text>
      </svg>`;
  }
}

function createShape(data) {
  console.log(typeof data);
  console.log(data);
  console.log(data.shape[0]);
  if (data.shape[0] === "Circle") {
    const newCircle = new Circle(data.color, data.text, data.textColor);
    console.log(newCircle);
    return newCircle.render();
  } else if (data.shape[0] === "Square") {
    const newSquare = new Square(data.color, data.text, data.textColor);
    return newSquare.render();
  } else if (data.shape[0] === "Triangle") {
    const newTriangle = new Triangle(data.color, data.text, data.textColor);
    return newTriangle.render();
  }
}

module.exports = { Circle, Square, Triangle, createShape };
