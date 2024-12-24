// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#taskInput');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const taskList = document.querySelector('#taskList');
    
        // Add task
        addTaskBtn.addEventListener('click', () => {

            if(taskInput.value == " "){
              alert("Please Enter Your Value")
              return;
          }
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
              const taskItem = document.createElement('li');
              taskItem.className = 'flex justify-between items-center bg-gray-100 p-3 rounded-md';
                
            }
          });
        
          
  });

