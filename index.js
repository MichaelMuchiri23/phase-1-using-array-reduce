const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries=0

function adder(array){
    for(const element of array){
        totalBatteries+=element
    }
    return totalBatteries
} 

adder(batteryBatches)