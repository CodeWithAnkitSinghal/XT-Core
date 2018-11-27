"use strict"
console.log('script connected');
//static binding or lexical scope

// var a =10;

// function print(){
//     console.log(a);
// }

// function run(){
//     var a = 100;
    
//     print();
// }

// run();

// const training = {
//     name: 'Ankit',
//     teach: function(){
//         console.log(this.name);
//     }
// };

// training.teach();

function sessionStart(){
    function Trainer(name) {
        this.name = name;
        this.doTeach = function(sub) {
            console.log(this.name + " teaching " + sub);
            let that = this;
            let notes = ".js-notes"
            let doLearn = function(){
                console.log(this.name+ " learning " + sub + " with " + notes + " from " + that.name);
            }
            console.log('teaching ends');
            return doLearn
        }
    }

    function Employee(name) {
        this.name = name;
    }

    const tnr = new Trainer('subramanian')
    const e1 = new Employee('E1');
    const e2 = new Employee('E2');
    const doLearn = tnr.doTeach('.js');
    doLearn.call(e1);
    const e2LearnFunc = doLearn.bind(e2)
    
    e2LearnFunc();
}
sessionStart();
