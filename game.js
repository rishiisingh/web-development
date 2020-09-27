var secretnumber = 4;
var guessnumber = Number(prompt("enter the number"));
if(guessnumber===secretnumber){
    alert("you are correct");
}
else if(guessnumber<secretnumber)
    {
    alert("guess higher");
}
else 
    {
    alert("guess lower");
}