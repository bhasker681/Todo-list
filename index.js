const inputBox = document.querySelector(".input");
const listContainer = document.querySelector(".listContainer");

function Add(){

if(inputBox.value ===""){
    alert("Please enter a task");

} else{
    const input = inputBox.value;
    const li = document.createElement("li");
    li.innerHTML = input;
    listContainer.appendChild(li);
    let span = document.createElement("span");
     span.innerHTML="❎";
     li.appendChild(span);
     saveData();
}
inputBox.value = "";
saveData();
}

listContainer.addEventListener("click" , event=>{
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
        saveData()
    } else if(event.target.tagName === "SPAN"){
           event.target.parentElement.remove();
           saveData();
    } 
},false )


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML= localStorage.getItem("data");
}

showTasks()

    


    
