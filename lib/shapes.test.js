const createShape = require("./shapes");

describe("createShape", () => {
  it("should return a string of svg code with the correct values in the correct spots", () => {
    const color = "red";
    const text = "svg";
    const textColor = "white";
    const shape = new Triangle(color, text, textColor);
    expect(
      shape.render().toEqual(`<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
		    <polygon points="250,60 100,400 400,400" stroke="red" fill="red" />
        <text x="50%" y="72%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial">svg</text>
      </svg>`)
    );
  });
});
