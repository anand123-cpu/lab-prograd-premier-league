//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var managerDetails=[managerName,managerAge,currentTeam,trophiesWon]
  return managerDetails
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if(formation.length==0) {
    return null;
  }
  else {
    return{
      "defender" : formation[0],
      "midfield" : formation[1],
      "forward" : formation[2]

    }
  }
  
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var playerDebut=[];
  for(var i=0;i<players.length;i++) {
    if(players[i].debut==year) {
      playerDebut.push(players[i])
    }
  }
  return playerDebut
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var playerPosition = []
  for (var i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      playerPosition.push(players[i])
    }
  }
  return playerPosition
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var arr=players.filter(function(player){
    for(each of player.awards){
      if(each.name===awardName){
        return player;
      }
    }
  })
  return arr;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  var arr=players.filter(function(player){
    var count=0;
    for(each of player.awards) {
      if (each.name==awardName)
      count+=1;
    }
      if (count==noOfTimes)
      return player;
  })
  if(arr.length!=0){
  return arr;
  }
  return [];
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, Country){
  var arr=players.filter(function(player){
    if(player.country===Country){
      for(each of player.awards){
        if(each.name===awardName)
        return player;
      }
    }
  })
  if(arr.length!=0){
    return arr;
  }
  else{
    return [];
  }
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var filtered = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age) {
      filtered.push(players[i]);
    }
  }
  return filtered;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
