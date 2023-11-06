function handleClick(event) {
  console.log('button clicked:', 'button clicked');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}
const btn = document.querySelector('.click-button');
btn.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hover:', 'button hovered');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}
const hov = document.querySelector('.hover-button');
hov.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button dbl-click:', 'button double-clicked');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}
const dbl = document.querySelector('.double-click-button');
dbl.addEventListener('dblclick', handleDoubleClick);
