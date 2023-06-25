const { Circle, Square, Triangle } = require("../lib/shapes");

describe("Cirlce", () => {
  test("Circle Test", () => {
    const expectedShape = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="200" stroke="red" fill="red"/>;
    <text x="50%" y="54%" text-anchor="middle" fill="blue" font-size="100px" font-family="Arial">SVG</text>
    </svg>`;
    const circle = new Circle("red", "SVG", "blue");
    expect(circle.render()).toEqual(expectedShape);
  });
});

describe("Square", () => {
  test("Square Test", () => {
    const expectedShape = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="250" height="350" xmlns="http://www.w3.org/2000/svg">
      <rect width="250" height="250" stroke="red" fill="red" />
      <text x="50%" y="42%" text-anchor="middle" fill="blue" font-size="100px" font-family="Arial">SVG</text>
    </svg>`;
    const square = new Square("red", "SVG", "blue");
    expect(square.render()).toEqual(expectedShape);
  });
});

describe("Triangle", () => {
  test("Triangle Test", () => {
    const expectedShape = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
		    <polygon points="250,60 100,400 400,400" stroke="red" fill="red" />
        <text x="50%" y="72%" text-anchor="middle" fill="blue" font-size="100px" font-family="Arial">SVG</text>
      </svg>`;
    const triangle = new Triangle("red", "SVG", "blue");
    expect(triangle.render()).toEqual(expectedShape);
  });
});
