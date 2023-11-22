/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius * radius * Math.PI, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, and the radius is ${this.radius}.`;
  }
}

const newCircle = new Circle(9);

console.log('Circle:', newCircle);
console.log('Is newCircle an instanceof Circle?', newCircle instanceof Circle);
console.log('Describe:', newCircle.describe());
