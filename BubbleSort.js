function swapValues(i,j)
{
    let t = array[i];
    array[i] = array[j];
    array[j] = t;


    setTimeout(function () {
        table.rows[0].cells[i].style["background-color"] = "red";
        table.rows[0].cells[j].style["background-color"] = "red";
    },500);

    setTimeout(function(){
        table.rows[0].cells[i].innerHTML = array[i];
        table.rows[0].cells[j].innerHTML = array[j];

        table.rows[0].cells[i].style["background-color"] = "green";
        table.rows[0].cells[j].style["background-color"] = "green";
    },1100);
}

function BubbleSort(){
    let time = 0;
    for(let i=0;i<size;i++)
    {
        setTimeout(function(){
            for(let j=0;j<size-i-1;j++)
            {
                setTimeout(function(){
                    table.rows[0].cells[j].style["background-color"] = "#0098cc";
                    table.rows[0].cells[j+1].style["background-color"] = "#0098cc";

                    if(array[j] > array[j+1])
                    {
                        setTimeout(function(){
                            swapValues(j,j+1);
                        },300);
                    }
                    else{
                        setTimeout(function(){
                            table.rows[0].cells[j].style["background-color"] = "green";
                            table.rows[0].cells[j+1].style["background-color"] = "green";
                        },1500);
                    }
                },j*1800);
            }
        },time);

        time = time + (size-i-1)*1900;
        console.log(time);
    }

    //  Time for which the buttons should be disabled
    setTimeout(function(){
        enableButtons();
    },time-200);
}
