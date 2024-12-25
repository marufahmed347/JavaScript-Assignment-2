// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#taskInput');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const taskList = document.querySelector('#taskList');
    
        // Add task
        addTaskBtn.addEventListener('click', () => {

            if(taskInput.value == ""){
              alert("Please Enter Your Value")
              return;
          }
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
              const taskItem = document.createElement('li');
              taskItem.className = 'flex justify-between items-center bg-gray-100 p-3 rounded-md';
                        
              // Task text
              const taskTextElement = document.createElement('span');
              taskTextElement.textContent = taskText;
              taskTextElement.className = 'text-gray-800 flex-grow cursor-pointer';
              taskTextElement.addEventListener('click', () => {
                taskTextElement.classList.toggle('line-through');
                taskTextElement.classList.toggle('text-gray-400');
              });

              // Ok kora button
              const okBtn = document.createElement('button');
              okBtn.className = 'bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-1';
              okBtn.innerHTML = 'Ok';
              okBtn.addEventListener('click', () => {
              taskTextElement.style.textDecoration = taskTextElement.style.textDecoration === 'line-through' ? '' : 'line-through';
              });

              // Edit kora button
              const editBtn = document.createElement('button');
              editBtn.className = 'bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-1';
              editBtn.innerHTML = 'Edit';
              editBtn.addEventListener('click', () => {
                const newTaskText = prompt('Edit task:', taskTextElement.textContent);
                  if (newTaskText !== null && newTaskText.trim() !== '') {
                  taskTextElement.textContent = newTaskText.trim();
                  }
              });
        
              // Delete kora button
              const deleteBtn = document.createElement('button');
              deleteBtn.innerHTML = 'Delete';
              deleteBtn.className = 'bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600';
              deleteBtn.addEventListener('click', () => {
                taskList.removeChild(taskItem);
              });
          

              taskItem.appendChild(taskTextElement);
              taskItem.appendChild(okBtn)
              taskItem.appendChild(editBtn);
              taskItem.appendChild(deleteBtn);
              taskList.appendChild(taskItem);
              taskItem.appendChild(taskSpan);
              
        
              taskInput.value = '';
              taskInput.focus();
            }
          });

        // enter
        taskInput.addEventListener('keypress', (e) => {
            
            if (e.key === 'Enter') {
                addTaskBtn.click();
            }
        });
        
  });

// to do list assignment done