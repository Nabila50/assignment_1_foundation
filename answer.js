// * Question_1:


// const describeValue = (value) =>{
//     const valueTypes = typeof value;
//     const booleanValues = value ? "truthy" : "falsy";

//     return `"${valueTypes} | ${booleanValues}"`;
// }


// console.log(describeValue(null))


// * Question_2

// const getDayType = (day)=>{
//     switch (day.toLowerCase()) {
//         case "friday":
//         case "saturday":

//             return "Weekend";

//         case "monday":
//         case "tuesday":
//         case "wednesday":
//         case "thursday":
//             return "Working Day";

//         default:
//             return "Invalid Day";
           
//     }
// }

// console.log(getDayType("Monday"))

// * Question_3

const validateUsername = (userName) =>{
    if(userName.length <4 ){
        return ("Too Short")

    } else if( userName.includes(" ")){
        return "No Spance Allowed!"

    }else if(userName.toLowerCase().includes("admin")){
        return "Reserved Word"

    }else{
        return "Available"
    }
}

console.log(validateUsername("Arahim islam"))