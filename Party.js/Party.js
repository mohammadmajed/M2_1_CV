const minAge = 18;
const maxAge = 35;
let userAge;

do{
userAge = prompt("How old are you")
userAge = parseInt(userAge);
if (isNaN (userAge) ){
    continue;
}
if (userAge < minAge){
    alert("You are too young !")
}else if(userAge>maxAge){
    alert("You are too old!")
}else{
    let userName = prompt("What is your name ?")
    alert(`Hi ${userName}, Welcome to party `)
}
}while (confirm("is there anyone else?"));