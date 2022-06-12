var x = 'Javascript'
//var X = 16

try{
 if(x == ' ')
 throw 'Empty'
 if(isNaN(x)) //before checking it will convert the value in the variable to number, since js does not specify the datatype in beginning
 throw 'Not a number'
}
catch(output){

 console.log(output)

}