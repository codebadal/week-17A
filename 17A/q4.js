//let

{
    console.log("before :", letvalue);  //ReferenceError: Cannot access 'letvalue' before initialization
    let letvalue = 10 ;

    console.log("after :", letvalue); // after : 10

}

//const

{
    console.log("before", constvalue);  //ReferenceError: Cannot access 'constvalue' before initialization
    const constvalue = 20;
    console.log("after :", constvalue);  //after : 20
}

//var 


{
    console.log("before :", varValue); //before : undefined
    var varValue = 40 ;
    console.log("after :", varValue);  //after : 40
}