//Author : Arie Brainware

function addTask(){
    var task = prompt("What do you want to do ?");
    document.getElementById("task").innerHTML+="<input type='checkbox' placeholder='What do you want to do?'>"+task+"<br>";
}

function resetTask(){
    document.getElementById("task").innerHTML="";
    
}