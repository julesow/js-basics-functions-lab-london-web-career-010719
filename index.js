// Code your solution in this file!
// let d;
// let a;
// let b;
function distanceFromHqInBlocks(d){
return Math.abs(d - 42);
}

function distanceFromHqInFeet(d) {
  return distanceFromHqInBlocks(d)*264

}
function distanceTravelledInFeet(a,b) {
  return Math.abs((a-b)*264);
}

function calculatesFarePrice(a,b){
  let dt = distanceTravelledInFeet(a,b)
  if(dt < 400){
    return 0;}
  else if((dt> 400) && (dt < 2000)){
      return (dt - 400) * .02;
} else if (dt > 2000 && dt < 2500){
    return  25;
  } else if (dt > 2500 ){
      return 'cannot travel that far';
    }
}
