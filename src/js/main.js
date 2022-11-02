import { ToDo } from "./todo";

let inputContainer = document.getElementById("inputContainer");
inputContainer.className = "inputContainerStyle";
let inputTask = document.getElementById("inputTask");
let buttonTask = document.getElementById("buttonTask");
buttonTask.innerHTML = "x";

let todoContainer = document.getElementById("todoContainer");
todoContainer.className = "containerList";
let newUl = document.createElement("ul");
newUl.className = "ulStyle";
todoContainer.appendChild(newUl);
let doneTag = document.getElementById("deletedTask");



let newList = [new ToDo("städa", false), new ToDo("Gymma", false), new ToDo("laga mat",false), new ToDo("Plugga",false)];



for (let i = 0; i < newList.length; i++){

    let newLiList = document.createElement("li");
    newLiList.className = "myListStyle";
    newUl.appendChild(newLiList);

   
    let newSpan = document.createElement("span");
    newSpan.className = "textStyle";
    newLiList.appendChild(newSpan);
    console.log(newSpan);

    newSpan.innerHTML += newList[i].myTodo;
 
   
    let myInputTag = document.createElement("input");
    myInputTag.setAttribute("type","checkbox");
    newLiList.appendChild(myInputTag);
    myInputTag.addEventListener("click",() => {
        if(myInputTag.checked === true){
           newList[i].completed=true;
           newSpan.innerHTML =  newList[i].myTodo + " :klar!";  
        }
           else {
            newList[i].completed=false; 
            newSpan.innerHTML = newList[i].myTodo;
        }
        console.log(newList);
    }
    );

    let deleteButton = document.createElement("button");
    newLiList.appendChild(deleteButton);
    deleteButton.innerHTML ="x";
    deleteButton.addEventListener("click",() => { 
        if(deleteButton === true){

        newList.splice(i,1);
        newList.innerHTML =  newList[i].myTodo;  
     }
        else {
         newList[i].completed=false; 
         newSpan.innerHTML = newList[i].myTodo;
     }});
    

}

function deleteTask(deleteButton, newLiList){
    console.log(deleteButton);
    if(deleteButton === true){

      newLiList.splice(i,2); 

        
    }
}






















