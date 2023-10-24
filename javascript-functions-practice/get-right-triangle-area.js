/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
  const triangleArea = (1 / 2) * (base * height);
  return triangleArea;
}

console.log('Value of getRightTriangleArea:', getRightTriangleArea(3, 4));
