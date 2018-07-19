//Author : Arie Brainware


function addTask() {
    var task = document.getElementById("task");
    document.getElementById("list").innerHTML += "<button type='button' class='list-group-item list-group-item-action active text-center'>" +  task + "</button>";
}

function resetTask() {
    document.getElementById("list").innerHTML = "";

}