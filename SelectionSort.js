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
    },1600);
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
                },1600);
            }
        },2000*i);
    }

    //  Time for which the buttons should be disabled
    setTimeout(function(){
        enableButtons();
    },size*2000-2000);
}
