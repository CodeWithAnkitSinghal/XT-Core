console.log('script connected');

function a(){
    var count = 0;

    return {
        increment(){
            count++;
        }
        ,
        decrement(){
            count--;
        }
        , display(){
            console.log(count);
        }
    }
    
}

ba = a();
ba.increment();
ba.increment();
ba.display();
ba.decrement();
ba.display();




//object oriented programming Principles:
/*
first 5 are mandotory
1.  abstraction
2.  encapsulation
3.  types
4.  hierarchy
5.  Modularity
6.  concurrency
7.  persistency
*/

//object based programming:

/*
object:
    -> Dynamic Memory
Program:
    1.Passive
        the program which can not be accessed by CPU.
        the program which is not in main memory.
    2.Active
        the program which can be accessed by CPU.
        the program which is in main memory.

Global Object:
Any scripting engine will initially create a global object.
we can have multiple global object.
It is object which is container for your code.

*/