// What is the diff b/t null and undefined?
//      Both represent the basence of a vslue.
//      Null is the DELIBERATE absence of a value
//      Undefined is the deafult absence of a value

// What is the diff b/t a method and a function?
//      A method is a function that belongs to object. Call it with object.method()
//      Function does not belong to an object. Call it with function()

const o = {
    foo: function(){
        console.group('foo')
    }
}

o.foo();

function bar(){
    console.log('bar')
}

bar();
// Foo is a function
// ------------------------------------------------------------------------------



foo();

const foo = () => {
    console.log('fooo')
}

// Will result in a ReferenceError saying foo is not defined. Const variable is not hoisted.


foo();

var foo = () => {
    console.log('fooo')
}

// Will result in a TypeError saying foo is not a function. Var variable is hoisted (will default to undefined variable). Cannot invoke the function -> causes error

// Hoisting 
    // - var is hoisted
    // - const is not hoisted
    // - let is not hoisted

// Scoping
    // var has function scope
    // let has block scope
    // const has block scope

    
    function foo() {
        potato = 'carb';
    }

    foo()
    console.log(potato) // ReferenceError - potato is not defined

   
    if (true){
        var potato = 'carb'
    }

    console.log(potato) // carb


    //block scope
    let potato;
    if (true) {
        let potato = 'carb'
    }

    console.log(potato) // Undefined




