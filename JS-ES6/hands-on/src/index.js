//function
//argument
function add(a, b) {
    var result = a + b;
    console.log(result);
}

//parameters
add(10, 10);
add(10); //NaN
add("10", "10");
add("10", 10);
add(1, 1, 1); // skips the third parameter


//return
function substract(a, b) {
    return a - b;
}

substract(10, 1);

//this returns undefined
function isValid() {
    return;
}

