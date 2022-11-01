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

    newSpan = document.createElement("span");
    newSpan.className = "textStyle";
    newLiList.appendChild(newSpan);

    newSpan.innerHTML += newList[i];

    let myInputTag = document.createElement("input");
    myInputTag.setAttribute("type","checkbox");
    newLiList.appendChild(myInputTag);
    myInputTag.addEventListener("click",() => {checkInput(myInputTag,newSpan, newList[i])});

    deleteButton = document.createElement("button");
    newLiList.appendChild(deleteButton);
    deleteButton.innerHTML ="x";
    deleteButton.addEventListener("click",() => {deleteTask(deleteButton,newSpan)});
    

}

   function checkInput(myInputTag,newSpan, content){
    if(myInputTag.checked === true){
    console.log(content);
        let li = myInputTag.parentElement;
        let spanText= li.firstChild;
        spanText.innerText = "Klar!";
        
        
    }
     else {
        if (myInputTag.checked ===false){
            let li = myInputTag.parentElement;
            let spanText= li.firstChild;

        return spanText.innerHTML = content;
    }
}



}

//function deleteTask(){
    //if(del){
       // newLiList.innerHTML ="";
    //}
//}










