/*Switch statement is another conditional statements, so the diff between switch and if-else 
is that, in swithc once the statement is executed, it loops through and checks for the correct statement
and get the output based on the correct case */

//A small exaple given below to get tp know the syntax of swith case

var d = new Date()
var day = d.getDay()
console.log(day)

//getDay function is to get the current day number in the week starting wkth sunday as 0

switch (day){
    case 1:
        dayname = 'Monday'
        console.log('Today is', dayname)
        break;
    case 2:
        dayname = 'Tuesday'
        console.log('Today is', dayname)
        break;
    case 3:
        dayname = 'Wednesday'
        console.log('Today is', dayname)
        break;
    case 4:
        dayname = 'Thursday'
        console.log('Today is', dayname)
        break;
    case 5:
        dayname = 'Friday'
        console.log('Today is', dayname)
        break;
    case 6:
        dayname = 'Saturday'
        console.log('Today is', dayname)
        break;
    case 0:
        dayname = 'Sunday'
        console.log('Today is', dayname)
        break;
    default:
        console.log('Wrong number')
}
