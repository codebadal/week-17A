const person = {
    fistName: "rahul",
    lastName: "nam to suna hoga",
    age: 24,
};


function ageInDays(person,logResult){
const fullName = `${person.fistName} ${person.lastName}`;
const age = person.age*365;
return logResult(fullName, age)
};

function logResult(fullName, age){
    console.log(`The person's full name is ${fullName},  and their age in days is ${age}`);
}

ageInDays(person, logResult)

// output
// The person's full name is rahul nam to suna hoga,  and their 
// age in days is 8760