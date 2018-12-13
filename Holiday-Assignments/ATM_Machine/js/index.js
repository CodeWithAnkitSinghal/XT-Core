console.log('script connected');

const inputAmount = document.getElementById('amount')
const note1 = document.getElementById('note1')
const note2 = document.getElementById('note2')
const note5 = document.getElementById('note5')
const note10 = document.getElementById('note10')
const note20 = document.getElementById('note20')
const note50 = document.getElementById('note50')
const note100 = document.getElementById('note100')
const note200 = document.getElementById('note200')
const note500 = document.getElementById('note500')
const note2000 = document.getElementById('note2000')
const getMoney = document.getElementById('getMoney')
const totalNotes = document.getElementById('totalNotes')
var total = 0;

function clearFields(){
    note1.innerHTML = 0;
    note2.innerHTML = 0;
    note5.innerHTML = 0;
    note10.innerHTML = 0;
    note20.innerHTML = 0;
    note50.innerHTML = 0;
    note100.innerHTML = 0;
    note200.innerHTML = 0;
    note500.innerHTML = 0;
    note2000.innerHTML = 0;
    totalNotes.innerHTML = 0;
}

getMoney.addEventListener('click', function(){

    total = 0;
    clearFields();

    var input = inputAmount.value;
    var num = 0;

    num = Math.floor(input / 2000);
    if(num){
        note2000.innerHTML = num;
        total +=num;
        input = input % (2000 * num);
    }
    num = Math.floor(input/500)
    if(num){
        note500.innerHTML = num;
        total +=num;
        input = input % (500*num);    
    }

    num = Math.floor(input/200)
    if(num){
        note200.innerHTML = num;
        total +=num;
        input = input % (200*num);    
    }

    num = Math.floor(input/100)
    if(num){
        note100.innerHTML = num;
        total +=num;
        input = input % (100*num);
    }

    num = Math.floor(input/50)
    if(num){
        note50.innerHTML = num;
        total +=num;
        input = input % (50*num);    
    }

    num = Math.floor(input/20)
    if(num){
        note20.innerHTML = num;
        total +=num;
        input = input % (20*num);
    }

    num = Math.floor(input/10)
    if(num){
        note10.innerHTML = num;
        total +=num;
        input = input % (10*num);
    }

    num = Math.floor(input/5)
    if(num){
        note5.innerHTML = num;
        total +=num;
        input = input % (5*num);
    }

    num = Math.floor(input/2)
    if(num){
        note2.innerHTML = num;
        total +=num;
        input = input % (2*num);
    }

    num = Math.floor(input/1)
    if(num){
        note1.innerHTML = num;
        total +=num;
        input = input % (1*num);
    }

    totalNotes.innerHTML = total;
})