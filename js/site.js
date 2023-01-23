//Controller Function
//Get string data from the page
function getString() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value; 

    let returnObj = palindrome(userString);

    displayResults(returnObj);
}

//Logic Function
//Identify if the string is a palindrome
function palindrome(userString){

    let returnObj = {};
    //make string lowercase and remove whitespace, special characters
    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    //reverse the string
    let revString = [];
    for(let i = userString.length-1; i >= 0; i--){
        revString += userString[i];
    }

    //check if the string is same forward and backward
    if(revString == userString) {
        returnObj.msg = "Yes!  You entered a palindrome"
    } else {
        returnObj.msg = "Nope! you did not enter a palindrome"
    }

    returnObj.reversed = revString;

    return returnObj;
}

//Display Function
//Display the output on the screen
function displayResults(returnObj) {
    //turn on alert box
    document.getElementById("alert").classList.remove("invisible");

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed} `;
}