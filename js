
60	// Kilotmeter to Meter----------------------------------------------------------
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}
var knowKilometer = kilometerToMeter(5);
console.log(knowKilometer);


// Budget Calculator----------------------------------------------------------
function budgetCalculator(watch, mobile, laptop){
   if(watch >= 0, mobile >= 0, laptop >= 0){
      var watchCost = watch * 50;
      var mobileCost = mobile * 100;
      var laptopCost = laptop * 500;
      var totalCost = watchCost + mobileCost + laptopCost;
   }
   return totalCost;
}
var totalCost = budgetCalculator(5, 3, 2);
console.log(totalCost);


// Hotel Cost----------------------------------------------------------------------
function hotelCost(period) {
    var cost = 0;
if(period <= 10){
    cost = period * 100;
}else if(period <= 20){
    var first10 = 10 * 100;
    var remaining = period - 10;
    var second10 = remaining * 80;
    cost = first10 + second10;
}else{
    var first10 = 10 * 100;
    var second10 = 10 * 80;
    var remaining = period -20;
    var moreThen20 = remaining * 50;
    cost = first10 + second10 + moreThen20;
}
return cost;
}
var totalCost = hotelCost(22);
console.log(totalCost);


// Mega Friend-------------------------------------------------------------------------
function  megaFriend(friends) {
    var wordLength = 0;
for (var i = 0; i < friends.length; i++) {
    if (friends[i].length > wordLength) {
        var wordLength = friends[i].length;
        var largest = friends[i];
    } 
}
return largest;
}
var friends = ["Abul", "Kamal", "Jubair Hossen", "Aftab Ullah", "Shikh Hasina", "Shamim", "Nazmul"];
var myMegaFriend = megaFriend(friends);
console.log(myMegaFriend);


