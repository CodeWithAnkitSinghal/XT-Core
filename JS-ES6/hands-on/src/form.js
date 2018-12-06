
var value1 = '';
document.querySelector('#nameInput').addEventListener('input', function(E){
    value1 = E.target.value;
});

var value2 = '';
document.querySelector('#exampleFormControlSelect1').addEventListener('change', function(E){
    value2 = E.target.value;
});

var checkedValue = []; 
function getCheckBox1Value(){
    var inputElements = document.querySelector('#inlineCheckbox1');
    if(inputElements.checked){
        checkedValue.push(inputElements.value);
    }
}

function getCheckBox2Value(){
    var inputElements = document.querySelector('#inlineCheckbox2');
    if(inputElements.checked){
        checkedValue.push(inputElements.value);
    }
}

function getCheckBox3Value(){
    var inputElements = document.querySelector('#inlineCheckbox3');
    if(inputElements.checked){
        checkedValue.push(inputElements.value);
    }
}

var radioValue = []
function getRadioButton1Value(){
    var inputElements = document.querySelector('#gridRadios1');
    if(inputElements.checked){
        radioValue.push(inputElements.value);
    }
}

function getRadioButton2Value(){
    var inputElements = document.querySelector('#gridRadios2');
    if(inputElements.checked){
        radioValue.push(inputElements.value);
    }
}

function getRadioButton3Value(){
    var inputElements = document.querySelector('#gridRadios3');
    if(inputElements.checked){
        radioValue.push(inputElements.value);
    }
}

var formResult = '';

document.querySelector('#submitBtn').addEventListener('click', function(e){
    getCheckBox1Value();
    getCheckBox2Value();
    getCheckBox3Value();

    getRadioButton1Value();
    getRadioButton2Value();
    getRadioButton3Value();
    formResult = `Name: ${value1}, selectValues: ${value2}, checkboxValues: ${checkedValue}, radioValues: ${radioValue}`
    document.getElementById('formresultarea').innerHTML = formResult;
    console.log(`Name: ${value1}, selectValues: ${value2}, checkboxValues: ${checkedValue}, radioValues: ${radioValue}`);
    
})