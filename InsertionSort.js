
function InsertionSort(){
    let b = []
    for(let i = 0 ; i < size ; ++i)
        b[i] = array[i];

    let time = findTime();

    array = b;
    for(let i=1;i<size;i++)
    {
        setTimeout(function(){
            let j = i - 1;
            let counter = setInterval(function(){
                table.rows[0].cells[j].style["background-color"] = "#0098cc";
                table.rows[0].cells[j+1].style["background-color"] = "#0098cc";
                // console.log(new Date().getTime());
                if(array[j] > array[j+1])
                {
                    // console.log("Inside Swap");
                    setTimeout(function(){
                        // console.log("Swap" , new Date().getTime());
                        table.rows[0].cells[j].style["background-color"] = "red";
                        table.rows[0].cells[j+1].style["background-color"] = "red";
                    }, 800);

                    setTimeout(function(){
                    // console.log("Swapped" ,new Date().getTime());
                        table.rows[0].cells[j].style["background-color"] = "green";
                        table.rows[0].cells[j+1].style["background-color"] = "green";

                        let temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;

                        table.rows[0].cells[j].innerHTML = array[j];
                        table.rows[0].cells[j+1].innerHTML = array[j+1];
                    }, 1500);


                    setTimeout(function(){
                        // console.log("Reduced" , new Date().getTime());
                        j--;
                        if(j==-1 || array[j] <= array[j+1])
                            clearInterval(counter);
                    }, 1850);
                }
                else{
                    // console.log("Don't Swap",array[j],array[j+1]);
                    setTimeout(function(){
                    console.log(new Date().getTime());
                        table.rows[0].cells[j].style["background-color"] = "green";
                        table.rows[0].cells[j+1].style["background-color"] = "green";

                        clearInterval(counter);
                    }, 1850);
                }
            },1900);
        },time[i-1]);
    }

    // console.log(array);

    setTimeout(function(){
        enableButtons();
    },time[size - 1] + 1400);
}

function findTime(){
    let waitingTime = []
    let b = array , prev = 0;
    waitingTime.push(0)

    for(let i=1;i<size;i++)
    {
        let cnt = 0 , j = i-1;
        while(j>=0 && b[j] > b[j+1])
        {
            cnt++;
            let temp = b[j];
            b[j] = b[j+1];
            b[j+1] = temp;

            j--;
        }

        if(cnt == 0)
            prev+=2000;
        else
            prev = prev + cnt*2000;
        waitingTime.push(prev);
    }


    return waitingTime;
}
