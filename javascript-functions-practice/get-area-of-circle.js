/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const circleArea = Math.PI * radius ** 2;
  return circleArea;
}

console.log('Value of getAreaOfCircle:', getAreaOfCircle(3));
