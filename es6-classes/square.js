/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(area, perimeter, width) {
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return `${super.describe()}, and the width is ${this.width}.`;
  }
}

const newSquare = new Square(100, 40, 10);

console.log('Square:', newSquare);
console.log('Is newSquare an instanceof Square?', newSquare instanceof Square);
console.log('Describe:', newSquare.describe());
