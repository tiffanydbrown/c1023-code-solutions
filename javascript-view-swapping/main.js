const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].classList.add('active');
      } else {
        $tabList[i].classList.remove('active');
      }
    }
    const data = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') !== data) {
        $viewList[i].classList.add('hidden');
      } else {
        $viewList[i].classList.remove('hidden');
      }
    }
  }
});
