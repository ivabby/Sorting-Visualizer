var slider = document.getElementById("myRange");
var table = document.getElementById("myTable");
let dropdown = document.getElementById("dropdown");
let start = document.getElementById("start");
let generateNewValue = document.getElementById("generateNewValue");

size = slider.value;
let array = []
let speed = 1000;

generateArrayValues();

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    size = slider.value;
    generateArrayValues();
}

//  Generating Random array values every time either size of slider is changed or user clicks generate new values
function generateArrayValues(){
    array = []
    tableData = "<table><tr>";
    for(let i=0;i<size;i++){
        number = Math.floor(Math.random() * 100) + 1;
        if(number == 100) number--;
        array.push(number);
        tableData += "<td>" + number + "</td>";
    }
    tableData += "</tr></table>"
    // output.innerHTML = array;
    table.innerHTML = tableData;
}

function sortingStart(){

    disableButtons();

    let choice = document.getElementById("dropdown").value;
    console.log(choice);

    switch (choice) {
        case "SelectionSort":
            SelectionSort();
            break;
        case "BubbleSort":
            BubbleSort();
            break;
        case "InsertionSort":
                InsertionSort();
                break;
        default:
            console.log("Wrong Choice");
    }
}

dropdown.addEventListener("input" , function(){
    console.log(dropdown.value);
    start.style["visibility"] = "visible";
});

function disableButtons(){
    start.style["color"] = "red";
    start.disabled = true;
    generateNewValue.disabled = true;
    generateNewValue.style["color"] = "red";
    // myRange.style["color"] = "red";
    myRange.disabled = true;
    dropdown.style["color"] = "red";
    dropdown.disabled = true;
}

function enableButtons(){
    generateNewValue.disabled = false;
    generateNewValue.style["color"] = "white";
    start.style["color"] = "white";
    start.disabled = false;
    // myRange.style["color"] = "white";
    myRange.disabled = false;
    dropdown.style["color"] = "black";
    dropdown.disabled = false;
}
