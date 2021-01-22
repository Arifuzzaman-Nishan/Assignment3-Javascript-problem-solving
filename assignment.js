
// kilometerToMeter function start here

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "kilometer cannot be a negative please enter a positive number";
    }
    else if (kilometer >= 'a' && kilometer <= 'z' || kilometer >= 'A' && kilometer <= 'Z' || kilometer == "" || kilometer == " ") {
        return "kilometer cannot be a string! please enter a positive number";
    }
    //here convert kilometer to meter
    var meter = kilometer * 1000;
    return meter;
}

var kilometer = 5;
var result = kilometerToMeter(kilometer);
console.log(result);

// kilometerToMeter function end here




// budgetCalculation function start here

function budgetCalculator(watch, phone, laptop) {
    //50,100 and 500 are prices of watch,phone and laptop

    if (watch < 0 || phone < 0 || laptop < 0) return "Sorry number cannot be a negative number please enter a positive number";
    // here check the number is string or not
    else if (watch >= 'a' && watch <= 'z' || watch >= 'A' && watch <= 'Z' || watch == "" || watch == " ") {
        return "watch cannot be a string! please enter a number";
    }
    else if (phone >= 'a' && phone <= 'z' || phone >= 'A' && phone <= 'Z' || phone == "" && phone == " ") {
        return "phone cannot be a string! please enter a number";
    }
    else if (laptop >= 'a' && laptop <= 'z' || laptop >= 'A' && laptop <= 'Z' || laptop == "" || laptop == " ") {
        return "laptop cannot be a string! please enter a number";
    }
    //here calculate the total cost
    var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
}

var watch = 3;
var phone = 4;
var laptop = 5;
var answer = budgetCalculator(watch, phone, laptop);
console.log(answer);

// budgetCalculation function end here




// hotelCost function start here
function hotelCost(days) {

    var totalCost = 0;
    // here first check the number is integer or not
    if (days == parseInt(days)) {
        if (days >= 1 && days <= 10) {
            // for day 1 to 10 my cost is 100 taka
            totalCost = days * 100;
        }
        else if (days >= 11 && days <= 20) {
            // this one is 1-10 days calculation
            var firstPart = 10 * 100;
            // this is the 2nd part ramaining days calculation and here cost is 80 taka per day
            var remainingDay = (days - 10) * 80;
            // here add the all part 
            totalCost = firstPart + remainingDay;
        }
        else if (days > 20) {
            // this one is 1-10 days calculation
            var firstPart = 10 * 100;
            // this one is 11-20 days calculation
            var secondPart = 10 * 80;
            // this one is third part the remaining days and here cost is 50 taka per day
            var remainingDay = (days - 20) * 50;
            // here add the all part 
            totalCost = firstPart + secondPart + remainingDay;
        }
        else if (days < 0) return "days cannot be negative please enter a valid number";

        // this return is returns the totalcost after calculation this function 
        return totalCost;
    }

    // this one is for a invalid number like string and float number.
    else {
        //here check the input is string or not
        if (days >= 'a' && days <= 'z' || days >= 'A' && days <= 'Z') return "days datatype cannot be string please enter a integer number";
        else if (days == "" || days == " ") return "days cannot be a empty string please enter a integer number";
        else return "Invalid number please enter a valid number";
    }


}

var numberOfDays = 21;
console.log(hotelCost(numberOfDays));

// hotelCost function end here




// megaFriend function start here
function megaFriend(nameString) {

    for (var i = 0; i < nameString.length; i++) {
        /*here check the array what type of data contains in the array if it is number datatype then show the below message.*/
        if (nameString[i] == parseInt(nameString[i]) || nameString[i] == parseFloat(nameString[i])) {
            return "Array cannot be a number please enter a string. Here the number find at index " + i;
        }
        // check the string is empty or not
        else if (nameString[i] == "" || nameString[i] == " ") return "empty string please enter a valid string";
    }

    var ans = -1;  // to calculate the maximum length that's why initailly the ans value is -1
    var nameSave = "";  // empty string for save the nameSave;

    for (var i = 0; i < nameString.length; i++) {
        /* if the ans value is less than the nameString[i].length value then I update ans value and also save the name in nameSave string and thus I get the largest name size in the array.*/
        if (ans < nameString[i].length) {
            ans = nameString[i].length;
            nameSave = nameString[i];
        }
    }
    return nameSave;

}

var nameString = ["nishan", "Arifuzzaman Nishan"];
var output = megaFriend(nameString);
console.log(output);
// megaFriend function end here
