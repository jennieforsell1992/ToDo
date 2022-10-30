import { ToDo } from "./todo";


let containerList = document.getElementById("toDoContainer");
containerList.className = "containerList";
let checkboxes = document.getElementById("myCheckboxes");
checkboxes.className = "checkboxesStyle";

let ulList = document.getElementById("toDoList");
ulList.className = "ulStyle";

let myList = [new ToDo("diska","gå till gymmet","laga mat", "plugga på javascript")];


for (let i = 0; i < myList.length; i++){
let liListOne = document.createElement("li");
let liListTwo = document.createElement("li");
let liListThree = document.createElement("li");
let liListFour = document.createElement("li");

ulList.appendChild(liListOne);
ulList.appendChild(liListTwo);
ulList.appendChild(liListThree);
ulList.appendChild(liListFour);

liListOne.innerHTML = myList[i].clean;
liListTwo.innerHTML = myList[i].workout;
liListThree.innerHTML = myList[i].eat;
liListFour.innerHTML = myList[i].studying;

let myCheckbox = document.getElementById("myCheckbox")
myCheckbox.addEventListener("click", checked);

function checked(){

if(myCheckbox.checked === true){
    liListOne.innerHTML = "Klar!";
   
}
else{
    return liListOne.innerHTML = myList[i].clean; 


}
}



}






