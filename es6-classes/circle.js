/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(area, perimeter, radius) {
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, and the radius is ${this.radius}.`;
  }
}

const newCircle = new Circle(100, 40, 9);

console.log('Circle:', newCircle);
console.log('Is newCircle an instanceof Circle?', newCircle instanceof Circle);
console.log('Describe:', newCircle.describe());
