// * Question_1:


const describeValue = (value) =>{
    const valueTypes = typeof value;
    const booleanValues = value ? "truthy" : "falsy";

    return `${valueTypes} | ${booleanValues}`;
}


// * Question_2

const getDayType = (day)=>{
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":

            return "Weekend";

        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
           
    }
}


// * Question_3

const validateUsername = (userName) =>{
    if(userName.length <4 ){
        return ("Too Short")

    } else if( userName.includes(" ")){
        return "No Space Allowed"

    }else if(userName.toLowerCase().includes("admin")){
        return "Reserved Word"

    }else{
        return "Available"
    }
}



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

    return `${fare}`;
}
 

// * Question_5

const getChaseVerdict = (target, scored, ballsLeft) =>{

    const runsNeeded = target - scored;

    if(runsNeeded <= 0){
        return "Won";
    }

    if(ballsLeft <= 0){
        return "Lost"
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if(requiredRate <= 6) {
        verdict = "Comfortable"
    } else if (requiredRate >=6 && requiredRate <= 12){
        verdict = "Tough";
    } else{
        verdict = "Almost Impossible"
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
}
