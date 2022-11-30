// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = (array) => {
    return [array.slice(-2)[0], array.slice(-1)[0]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplyer) => {
    return (fare) => fare * multiplyer
}

const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3

const selectDifferentDrivers = (arrayOfDrivers, selectingDrivers) => selectingDrivers(arrayOfDrivers)