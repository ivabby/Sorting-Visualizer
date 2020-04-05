var slider = document.getElementById("myRange");
// var output = document.getElementById("output");
var table = document.getElementById("myTable");

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
    start.style["color"] = "red";

    SelectionSort();

    setTimeout(function(){
            start.style["color"] = "white";
    },(size - 1)*2000);
}

function swapValue(i,j)
{
    let t = array[i];
    array[i] = array[j];
    array[j] = t;


    setTimeout(function () {
        table.rows[0].cells[i].style["background-color"] = "red";
        table.rows[0].cells[j].style["background-color"] = "red";
    },800);

    setTimeout(function(){
        table.rows[0].cells[i].innerHTML = array[i];
        table.rows[0].cells[j].innerHTML = array[j];

        table.rows[0].cells[i].style["background-color"] = "green";
        table.rows[0].cells[j].style["background-color"] = "green";
    },1500);
}

function SelectionSort(){

    for(let i=0;i<size-1;i++)
    {

        setTimeout(function(){
            minIndex = i;
            table.rows[0].cells[i].style["background-color"] = "#0098cc";
            for(let j = i+1; j<size; j++)
                if(array[j] < array[minIndex])
                    minIndex = j;

            if(minIndex != i)
            {
                setTimeout(swapValue(i,minIndex,500),500);
            }
            else{
                setTimeout(function(){
                    table.rows[0].cells[i].style["background-color"] = "green";
                },1500);
            }
        },2000*i);
    }

}
