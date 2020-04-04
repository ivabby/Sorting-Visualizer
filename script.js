var slider = document.getElementById("myRange");
// var output = document.getElementById("output");
var table = document.getElementById("myTable");

size = slider.value;
let array = []

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
        array.push(number);
        tableData += "<td>" + number + "</td>";
    }
    tableData += "</tr></table>"
    // output.innerHTML = array;
    table.innerHTML = tableData;
}
