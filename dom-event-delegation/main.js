const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('Event Target:', event.target);
  console.log('Event Target Tagname:', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  const $taskListItem = event.target.closest('.task-list-item');
  console.log('Closest Task List Item:', $taskListItem);
  $taskListItem.remove();
});
