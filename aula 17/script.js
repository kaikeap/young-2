function add_task {
    let tesk = document.querySelector(#input_tesk).value;
    console.log(task);
    let tesklist = document.querySelector(".list_task");

    let newtask = document.createElement("li")
    newtask.textcontent = task;

    crateCloseButton(li);
}

//function crateCloseButton(li) {
    let span = createElement("span");

    span.classname = "close";
    span.appendchild(Text);
    li.appendchild(span);

    span.onclick = () => span.parentElelment.style.display = "none";

}

document.querySelector('li').forEach(crateCloseButton);

document.querySelector('input_tesk').addEventListener('click', (e) =>  
{
    if (e.target.tagname ==='LI')
        e.target.classlist.toggle('checked');

});


function add_task(){
    let task = document.querySelector("#input_task").value;
    console.log(task);
    let taskList = document.querySelector(".list-task");

    let newTask = document.createElement("li");
    newTask.textContent = task;

    // Criei depois para remover
    let removeButton = document.createElement("button");
    removeButton.textContent = "❌";
    removeButton.style.marginLeft = "10px";
    removeButton.style.background = "none"
    removeButton.onclick = function() {
        newTask.remove();
    };

    newTask.appendChild(removeButton);
    //Até aqui 
    taskList.appendChild(newTask);

    document.querySelector("#input_task").value = ""


}