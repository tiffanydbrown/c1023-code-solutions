/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area}, and the perimeter is ${this.perimeter}`;
  }
}

const newShape = new Shape(100, 40);

console.log('Shape:', newShape);
console.log('Is newShape an instanceof Shape?', newShape instanceof Shape);
console.log('Describe:', newShape.describe());
