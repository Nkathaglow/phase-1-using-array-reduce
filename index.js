const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries;

function reducer(batteryBatches) {
    return batteryBatches.reduce((accumulator, currentValue) =>
    accumulator+currentValue);
}

totalBatteries = reducer(batteryBatches)
