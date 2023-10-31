function manipulateString(string, logString){
    
    return logString(string.toUpperCase())
}

function logString(value){
    console.log(`The manipulate string is: ${value}`);
}

manipulateString("hello, world!",logString)



// output
// The manipulate string is: HELLO, WORLD!
