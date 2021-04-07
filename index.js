function distanceFromHqInBlocks(distanceblocks){
 if (distanceblocks>42) {
    
 return distanceblocks - 42
} 
else {
    return 42 - distanceblocks 
}
}
function distanceFromHqInFeet(distancefeet) {
 if (distancefeet>49) {
    return 2062 + 50 ;
 }else if (distancefeet>42) {
     return distancefeet + 221
 }
 
  else {
    return 2078 + distancefeet 
}
}

function distanceTravelledInFeet(num1 ,num2){
if (num1 > num2){
    return (num1 -num2) * 264
}
 else {
return (num2 - num1) *264
}
}
function calculatesFarePrice(start, destination){  
let travelled = distanceFromHqInFeet( start, destination)

    if (travelled <400) {
        return 0;
    }
 else if (travelled > 400 && travelled < 2000) {
    return (travelled - 400) *.02;
} else if (travelled > 2001 && travelled <2500) {
    return (travelled + 25);
} else if (travelled > 2500) {
    return 'cannot travel that far';
}
}
