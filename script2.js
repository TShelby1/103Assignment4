let names= [];

// //display on the console ("Naqui, Albert")
// console.log(names[2]);
// console.log(names[4]);
// //correct the Leo name
// names[0]="Leopoldo";
// console.table(names);
// console.log(names.length);
// //display the names in the html


function register(){
    console.log("Register");
    //get the name from the prompt and store the value
    let task=prompt("Enter new Task");
    //push the new student into the array
    names.push(task);
    //display the students again
    displayNames();
}

function displayNames(){
    //clear the canvas
    document.getElementById("taskList").innerHTML="";
    //traveling the array
    for(let x=0; x<names.length; x++){
        //display each name
        document.getElementById("taskList").innerHTML+=`
        <li id="${x}">${names[x]} <button onclick="deleteStudent(${x});"> Delete </button> </li>
        `;
    }
}
displayNames();



function deleteStudent(id){
    document.getElementById(id).remove(); //remove element from the html
    names.splice(id, 1); //remove element from the array

}