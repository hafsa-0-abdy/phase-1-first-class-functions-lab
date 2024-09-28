
// Returns First two drivers
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

// This returns the last two drivers
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);

}

const selectingDrivers  =[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}
function fareDoubler (fare){
    return fare * 2
}

const fareTripler = createFareMultiplier (3);
function selectDifferentDrivers(drivers,fn){
    return fn(drivers);
}