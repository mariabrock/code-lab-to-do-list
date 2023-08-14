// variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listener for add btn

addTask.addEventListener('click', function() {

  // create a new div to hold out task & add class for styling
  let task = document.createElement('div');
  task.classList.add('task');

  // create li that will display our task text (our lto-do list item)
  let li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  // i need to add a random id to each child

  // check btn and delete btn
  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkButton.classList.add('check-Task');
  task.appendChild(checkButton);
  
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add('delete-Task'); 
  task.appendChild(deleteButton);

  // alert if the input is empty, otherwise add task
  if(inputTask.value === "") {
    alert('Please enter a task!');
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  // task btn functionality
  checkButton.addEventListener('click', function() {

    checkButton.parentNode.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener('click', function(e) {
    let target = e.target;
    // the target is the delete btn (the trash can), parentEle1 is one lvl up (the li), and parentEle2 is the task
    target.parentElement.parentElement.remove();
  });

});