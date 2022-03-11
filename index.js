var cost = 0.00035;
var start;
var abc = function () {
    var button = document.getElementById("Button1");
    if ((button === null || button === void 0 ? void 0 : button.innerText) == "Start") {
        start = new Date().getTime();
        console.log(start);
        button.innerText = "Stop";
    }
    else {
        var stop_1 = new Date().getTime();
        console.log(stop_1);
        var price = (stop_1 - start) * cost;
        console.log(price);
        var costt = document.getElementById("cost");
        costt.innerText = "Cost " + price.toFixed(2) + " PLN";
        button.innerText = "Start";
    }
};
