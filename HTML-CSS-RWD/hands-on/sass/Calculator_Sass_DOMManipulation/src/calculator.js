var print = document.getElementById('print');
var erase = false;
var calc;

function Calculator(x){
  if (x === 'ce' || x === 'ac') {
    print.value = '';
    erase = false;
  } else if (x === 'eval') {
    print.value = Math.round(evil(print.value)*10000)/10000;
    erase = true;
  } else if (x === 'log' || x ==='sin' || x === 'tan') {
    switch (x) {
      case 'log':
        print.value = Math.log10(print.value);
        break;
      case 'sin':
        print.value = Math.sin(print.value);
        break;
      case 'tan':
        print.value = Math.sin(print.value);
        break;
    }
  } else {
    print.value += x;
  }
}

function evil(fn) {
  return new Function('return ' + fn)();
}



document.getElementById('ac').addEventListener('click', function(E){
  Calculator(E.target.value);
});

document.getElementById('sin').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('tan').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('log').addEventListener('click', function(E){
  Calculator(E.target.value);
})


document.getElementById('1').addEventListener('click', function(E){
  Calculator(E.target.value);
});

document.getElementById('2').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('3').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('4').addEventListener('click', function(E){
  Calculator(E.target.value);
})


document.getElementById('5').addEventListener('click', function(E){
  Calculator(E.target.value);
});

document.getElementById('6').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('7').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('8').addEventListener('click', function(E){
  Calculator(E.target.value);
})


document.getElementById('9').addEventListener('click', function(E){
  Calculator(E.target.value);
});

document.getElementById('0').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('.').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('*').addEventListener('click', function(E){
  Calculator(E.target.value);
})


document.getElementById('/').addEventListener('click', function(E){
  Calculator(E.target.value);
});

document.getElementById('+').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('-').addEventListener('click', function(E){
  Calculator(E.target.value);
})

document.getElementById('eval').addEventListener('click', function(E){
  Calculator(E.target.value);
})

