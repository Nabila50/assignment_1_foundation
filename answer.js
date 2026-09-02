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

// console.log(validateUsername("Arahim islam"))


// * Question_4

function getCngFare(distance, isNight=false, waitingMinutes= 0){
    let fare = 50;

    if(distance > 2){
        fare = fare + (distance-2) * 15
    }

    fare = fare + waitingMinutes * 2;

    if(isNight){
        fare = fare + (fare*20)/100;
    }

    return `total CNG Fare is : ${fare} taka`;
}
