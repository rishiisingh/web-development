console.log("print -10 to 19");
for(i=-10; i<20; i++){
    console.log(i)
}

console.log("print even 10 to 40");
for(i=10; i<=40; i++){
    if(i%2===0){
        console.log(i);
    }
    
}

console.log("print odd 300 to 333");
for(i=300; i<=333;i++){
    if(i%2!==0){
        console.log(i);
    }

}


console.log("print no. 5 to 50 which are divisible by both 3 and 5");
for(i=5;i<=50;i++){
    if(i%3===0&&i%5===0){
        console.log(i);
    }
}