const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const del = document.getElementById("del");
const four= document.getElementById("four");
const five= document.getElementById("five");
const six = document.getElementById("six");
const plus = document.getElementById("plus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const minus = document.getElementById("minus");
const decimal= document.getElementById("decimal");
const zero = document.getElementById("zero");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const answer = document.getElementById("answer");



const buttons =[seven,eight,nine,del,four,five,six,plus,one,two,three,minus,decimal,zero,divide,multiply,reset,equal]
//e.target.value
for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if (answer.innerHTML ==="0"){
            // if (i == 0 | i == 1 || i == 2 || i == 4 || i == 5|| i== 6|| i == 8|| i == 9 || i == 10 || i == 12 || i == 13){
            if(numbers(i)){
            answer.innerHTML="";
            answer.innerHTML += buttons[i].innerHTML;
            } else if (operatorAndDecimal(i)){
                answer.innerHTML += buttons[i].innerHTML;
            }

        }else if (i==16){
            answer.innerHTML= "0";
        } else if(i==3){
            let deletion = answer.innerHTML;
            deletion = deletion.slice(0,-1);
            if (deletion.length==0){
                answer.innerHTML = "0";
            }else {answer.innerHTML = deletion;
            }
        } else if(i==17){
            let testAnswer = (answer.innerHTML);
            testAnswer = testAnswer.replace("x","*");
           let newAnswer = eval(testAnswer);
           answer.innerHTML = newAnswer;
         } 
        else{
        answer.innerHTML += buttons[i].innerHTML;
        }
    })
}


function numbers(n){
    if (n == 0 | n == 1 || n == 2 || n == 4 || n == 5|| n== 6|| n == 8|| n == 9 || n == 10 || n == 13){
        return true;
    }
}

function operatorAndDecimal(n){
    if (n == 7 || n == 11 || n == 12 || n == 14 || n ==15){
        return true;
    }
}

function solution(){
    let check =  answer.innerHTML;
    console.log(check);
}
