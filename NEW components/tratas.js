const progressBar = document.querySelector('.progress-bar');
const taskButtons = document.querySelectorAll('.task-button');
let progress = 0;

taskButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Check if all previous tasks have been completed
    let previousTasksCompleted = true;
    for (let i = 0; i < index; i++) {
      if (!taskButtons[i].checked) {
        previousTasksCompleted = false;
        break;
      }
    }

    if (previousTasksCompleted) {
      // Update progress and progress bar
      progress = button.getAttribute('data-progress');
      progressBar.style.height = progress + '%';

      // Select all previous tasks
      for (let i = 0; i <= index; i++) {
        taskButtons[i].checked = true;
      }
    } else {
      // Deselect the clicked task if previous tasks are not completed
      button.checked = false;
    }
  });
});
