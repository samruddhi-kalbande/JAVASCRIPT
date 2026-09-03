let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    let task = input.value;

    if (task == "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    span.innerText = task;

    editBtn.innerText = "Edit";
    editBtn.className = "edit";

    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    editBtn.addEventListener("click", function() {

        if (editBtn.innerText === "Edit") {
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.innerText;
            input.style.padding = "12px";
            input.style.width = "230px";
            input.style.border = "1px solid #b8c7d9";
            input.style.borderRadius = "6px";
            input.style.fontSize = "14px";
            
            li.replaceChild(input, span);
            editBtn.innerText = "Save";
            input.focus();
            
        } else {
            let input = li.querySelector("input");
            let newTask = input.value;
            
            if (newTask !== "") {
                span.innerText = newTask;
                li.replaceChild(span, input);
                editBtn.innerText = "Edit";
            } else {
                alert("Task cannot be empty");
            }
        }

    });

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
});