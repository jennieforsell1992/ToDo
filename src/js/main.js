//import { ToDo } from "./todo";

let todoContainer = document.getElementById("todoContainer");
todoContainer.className = "containerList";
let newUl = document.createElement("ul");
newUl.className = "ulStyle";
todoContainer.appendChild(newUl);

newList =["städa","Plugga","Gymma","laga mat"];

for (let i = 0; i < newList.length; i++){

    let newLiList = document.createElement("li");
    newLiList.className = "myListStyle";

    newUl.appendChild(newLiList);

    newLiList.innerHTML += newList[i];

    let myInputTag = document.createElement("input");
    myInputTag.setAttribute("type","checkbox");
    newLiList.appendChild(myInputTag);
    myInputTag.addEventListener("click", checkInput)
    
    function checkInput(){
    if(myInputTag.checked === true){
    
        newLiList.innerHTML = "Klar!";
    }

    else{
        return newLiList.innerHTML = newList[i];
    }

}
}










