document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const addTodoButton = document.getElementById('add-todo');
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    // Add click event listener to the "Add To-Do" button
    addTodoButton.addEventListener('click', function() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            newTodoInput.value = ''; // Clear input field
        }
    });

    // Function to add a new to-do item
    function addTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed');
            moveToBottom(li);
            playDingSound();
        });

        const span = document.createElement('span');
        span.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn delete-btn';
        deleteButton.addEventListener('click', function() {
            fadeOutAndRemove(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    // Function to move completed item to the bottom of the list
    function moveToBottom(item) {
        todoList.removeChild(item);
        todoList.appendChild(item);
    }

    // Function to fade out and remove an item
    function fadeOutAndRemove(item) {
        item.classList.add('fade-out');
        setTimeout(function() {
            todoList.removeChild(item);
        }, 500);
    }

    // Function to play a "ding" sound when an item is completed
    function playDingSound() {
        const audio = new Audio('ding.mp3');
        audio.play();
    }
});
