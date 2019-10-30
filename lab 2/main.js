var taskId = 1;
var template = "";

var tasksList = { length: 0 };
function addNewTask() {
    var taskDescription = document.getElementById("taskDescription");
    if (taskDescription.value) {
        createTaskFromTemplate(taskDescription.value);
        taskDescription.value = "";
    }
}

function createTaskFromTemplate(taskDescription) {
    var newTask = liItemTemplate.cloneNode(true);
    newTask.style.display = '';
    newTask.id = `Task${taskId++}`;
    tasksList[newTask.id] = taskDescription;
    tasksList.length++;
    var x = document.getElementsByClassName("badge");
    x[0].innerText = tasksList.length;
    newTask.onclick = e => editTask(e, newTask);
    newTask.title = newTask.id;
    newTask.querySelector("[name='Description']").innerText = taskDescription;
    newTask.querySelector("[name='Edit']").classList.add("hidden");
    newTask.querySelector("[name='DescInput']").value = taskDescription;
    newTask.querySelector("button[name='Save']").onclick = e => saveEditedTask(e, newTask);
    newTask.querySelector("button[name='Delete']").onclick = e => deleteTask(e, newTask);
    newTask.querySelector("button[name='Cancel']").onclick = e => cancelEdition(e, newTask);
    taskList.appendChild(newTask);
    $(`[data-toggle="tooltip"]`).tooltip({ boundary: 'window' });
}

function editTask(e, task) {
    e.stopPropagation();
    var description = task.querySelector("[name='Description']");
    if (!description.classList.contains('hidden')) {
        task.querySelector("[name='DescInput']").value = description.innerText;
        description.classList.add("hidden");
        task.querySelector("[name='Edit']").classList.remove("hidden");
    }
}

function saveEditedTask(e, task) {
    e.stopPropagation()
    task.querySelector("[name='Description']").classList.remove("hidden");
    task.querySelector("[name='Edit']").classList.add("hidden");
    var text = task.querySelector("[name='DescInput']").value;
    task.querySelector("[name='Description']").innerText = text;
    tasksList[task.id] = text;
    $(".tooltip").remove();
}

function deleteTask(e, task) {
    delete tasksList[task.id];
    tasksList.length--;
    var x = document.getElementsByClassName("badge");
    x[0].innerText = tasksList.length;
    taskList.removeChild(task);
    $(".tooltip").remove();
}

function cancelEdition(e, task) {
    task.querySelector("[name='Edit']").classList.add("hidden");
    e.stopPropagation();
    task.querySelector("[name='Description']").classList.remove("hidden");
}

window.onload = () => {
    createTaskFromTemplate('Kanapka');
    createTaskFromTemplate('Masło');
    createTaskFromTemplate('Ciastko');
    createTaskFromTemplate('Cukierek');
    createTaskFromTemplate('Samochód');
    createTaskFromTemplate('cxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcx');
}