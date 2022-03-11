let cost: number = 0.00035;
let start:number;
let abc = function(){
    let button = document.getElementById("Button1");
    if (button?.innerText == "Start") {
        start = new Date().getTime()
        console.log(start);
        button.innerText = "Stop"
    } else {
        let stop = new Date().getTime()
        console.log(stop);
        let price = (stop - start) * cost;
        console.log(price);

        let costt = document.getElementById("cost");
        
        costt.innerText = "Cost " + price.toFixed(2) + " PLN";
        button.innerText = "Start"
    }
    
 }