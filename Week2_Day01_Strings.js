let UserName = `rotator`            //set the input

function ReverseValidation() {      //function to reverse the given input
    console.log (`Given String: ` + UserName)
    let SplitUserName = UserName.split("");
    let Reversed = "";
    for (let index = SplitUserName.length-1; index >= 0; index--) {
        Reversed = Reversed + SplitUserName[index];  
    }
    return Reversed;
}

function PalindromeCheck() {           // function to  check given & reversed strings are Palindrome or not
if (UserName ===  ReverseValidation()) {
    console.log(`Given String is Palindrome`);
} else {
    console.log(`Given String is not Palindrome`);
} 
}

PalindromeCheck()                       //call the function