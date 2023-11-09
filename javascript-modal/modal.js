const $button = document.querySelector('.modal');
const $btn = document.querySelector('.no');
const $modal = document.querySelector('.modal-dialog');

function show() {
  $modal.className = 'modal-dialog';
}

function hide() {
  $modal.className = 'modal-dialog hidden';
}

$button.addEventListener('click', show);
$btn.addEventListener('click', hide);
