let raceNumber = Math.floor(Math.random() * 1000);
// you can change to true to see different result
let earlyRegisteredRunner = false;
// you can change the age to see different result
let runnersAge = 30;
if(runnersAge > 18 && earlyRegisteredRunner){
  raceNumber += 1000
}
if( runnersAge > 18 && earlyRegisteredRunner ){
 console.log("Race will begin at 9:30am. Your race number is " + raceNumber)
} else if( runnersAge > 18 && !earlyRegisteredRunner ){
  console.log('Race will begin at 11:30am. Your race number is ' + raceNumber)
} else if ( runnersAge < 18 ){
  console.log("Race begins at 12:30pm. Your race number is " + raceNumber)
} else {
  console.log('Please see the registration desk.')
}