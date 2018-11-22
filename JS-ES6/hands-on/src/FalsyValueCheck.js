//falsy value concept in javascript is very different from object oriented languages
if (false) {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

if (0) {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

if ('') {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

if ("") {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

if (``) {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

var a;
if (a) {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

if (null) {
    console.log('in If block');
} else{
    console.log(`in else block`)
}

var b = 10;
var c;
var result = b*c;
if (result) {
    console.log('in If block');
} else{
    console.log(`in else block`)
}