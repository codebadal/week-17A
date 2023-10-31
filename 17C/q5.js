const name = "peter";

function createPromise(){
    return new Promise(function hello(resolve, reject){
        const print = `hello ${name}`
        resolve(print)
    })
}

let x = createPromise(name);
x.then((value)=>{console.log(value.toUpperCase());})


// output
// HELLO PETER