function foo() {
    return 'i am foo';
    console.log('hi')
}

function* foo() {
    yield 'i am foo';
    console.log('hi')
    let sum = 1 + 1;
    yield sum
}

const o = foo();
console.log(o.next())
console.log(o.next())

// Generator function returns an object. Do not use return keyword, use yield instead.

function* foo2(){
    yield 'starting';
    for (let i = 0; i < 10; i++){
        yield i
    }
}

const l = foo2();
console.log(l.next())
console.log(l.next())
console.log(l.next())
console.log(l.next())
console.log(l.next())
console.log(l.next())


// Ways to iterate thru array in JS
arr = ['a', 'b', 'c']
arr.forEach(console.log);

for (let i = 0; i < arr.length; i++) console.log(arr[i])

for (let ele of arr) {
    console.log(ele);
}

for (let i in arr) {
    console.log(arr[i])
}