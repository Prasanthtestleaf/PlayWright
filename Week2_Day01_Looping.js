let InputNumber = 1                             //Set the inout number
console.log(`ODD Numbers from 1 to 25 : `);     

function printOddNumbers () {                   //function to get the odd number from given range
while (InputNumber <= 25) {                     //while condition to check the odd number till 25
  
   DivNumber = InputNumber/2
    if (DivNumber % 1!==0) {
    console.log( InputNumber);
    }
   InputNumber ++

}
}
printOddNumbers()                               //call function

