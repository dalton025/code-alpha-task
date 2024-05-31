let listContainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

let todoApp = document.querySelector('.todo-app');

function addTask(){
    if(inputBox.value ===''){
        alert('Add Your Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)


        inputBox.value=''
        adjustHeight(); // Adjust the height of the container
        
        saveData()
    }
    
}

listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()

        adjustHeight(); // Adjust the height of the container

        saveData()
    }
})


function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML)
    
}

function showData(){
    listContainer.innerHTML=localStorage.getItem('tasks')
    adjustHeight();
}

function adjustHeight() {
    todoApp.style.height = 'auto';
    let height = todoApp.scrollHeight;
    todoApp.style.height = height + 'px';
}

showData()