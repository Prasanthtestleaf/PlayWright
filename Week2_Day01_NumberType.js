function NumberType(InputNumber) {                                                      //Set function to get the positive/negaative number 
    console.log(`Input Number: ` + InputNumber);
    if (InputNumber > 0) {                                                              //if condition to check the number
        console.log(`Given number is greater than 0, it is a positive number`);
    }
    else if (InputNumber < 0) {
        console.log(`Given number is less than 0, it is a negative number`); 
    }
    else {
        console.log(`Given number is 0, then the number is neutral`);   
    }
    }
NumberType(+8)                                                                          //give the input number while calling the function
    
    