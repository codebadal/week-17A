let myArry = [1,2,3,4,5,6,7,8,9];
function dubleArry(fn){
    return fn();
}


function result(num){
    myArry.forEach((num)=>{
        console.log(num*2);
       })
}

dubleArry(result)


// output
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
