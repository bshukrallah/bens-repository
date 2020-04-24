var valueField1 = document.getElementById('numField1');
var valueField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

// console.log(numField1.value);
// console.log(value1);
// var value1="";
// var value2="";

var result = "reishi";
function calculatePercent() {
    if (!numField1.value || !numField2.value) {
        alert("Please Enter Values in the Fields!"); }
        else {
            var value1 = parseFloat(numField1.value);
            var value2 = parseFloat(numField2.value);
        
            console.log(value1);
            console.log(value2);
            console.log("FUNCTION");
            var result = value1/value2;
            var percent = result * 100;
            console.log(percent);
            resultField.innerText = "Result: " + percent + "%";
        }

}

