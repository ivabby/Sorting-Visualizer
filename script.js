var slider = document.getElementById("myRange");
// var output = document.getElementById("output");
var table = document.getElementById("myTable");
let dropdown = document.getElementById("dropdown");
let start = document.getElementById("start");

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
    console.log("hi");
    let start = document.getElementById("start");
    // start.style["color"] = "red";
    // start.disabled = true;

    let choice = document.getElementById("dropdown").value;
    console.log(choice);

    switch (choice) {
        case "SelectionSort":
            SelectionSort();
            break;
        case "BubbleSort":
            BubbleSort();
            break;
        default:
            console.log("Wrong Choice");
    }

}

dropdown.addEventListener("input" , function(){
    console.log(dropdown.value);
    start.style["visibility"] = "visible";
});
