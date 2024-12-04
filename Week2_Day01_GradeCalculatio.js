function StudentGrade (Mark) {          //Function with Switch condition to get the student grade
    switch (true) {
        case Mark > 90:                 
            console.log(`Grade A`);
            break;
        case Mark > 60:
            console.log(`Grade B`);
            break;  
        case Mark > 35:
            console.log(`Grade C`);
            break;   
        default: 
            console.log (`Fail`)
            break;
    }
}

StudentGrade (59)                       //Call the function