//identified the given number is Odd or Even

function OddorEven(InputNumber) {           //function to get the given number is ODD or EVEN
    DivNumber = InputNumber/2
    if (DivNumber % 1!==0) {                //if condition to get the ODD number
        console.log(`Given Number is ` + InputNumber);
        console.log(`Given Number is divided by 2 and the result is ` + DivNumber);
        console.log(`The given number is ODD`);
        
        
    } else {                                //Else condition to get the EVEN number
        console.log(`Given Number is ` + InputNumber);
        console.log(`Given Number is divided by 2 and the result is ` + DivNumber);
        console.log(`The given number is EVEN`);
    }   
}

OddorEven (789)         //give the input number while calling the fucntion.
