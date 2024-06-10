const calculator = document.querySelector("#calculator");
const display = document.querySelector("results");

const numTracker = document.querySelector("#tracker");

const test = document.querySelector("test");

let stringArray = Array.from(display.textContent);

const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const operators = ["+","-","x","/"];

//Dont forget about decimials


// Number Buttons /w Functionality


const b0 = document.getElementById("0");
b0.addEventListener("click",() => {
    //Turn string Into Array
    stringArray = Array.from(display.textContent);

    

    display.textContent += "0"
});

const b1 = document.getElementById("1");
b1.addEventListener("click",()=> display.textContent += "1");
const b2 = document.getElementById("2");
b2.addEventListener("click",()=> display.textContent += "2");
const b3 = document.getElementById("3");
b3.addEventListener("click",()=> display.textContent += "3");
const b4 = document.getElementById("4");
b4.addEventListener("click",()=> display.textContent += "4");
const b5 = document.getElementById("5");
b5.addEventListener("click",()=> display.textContent += "5");
const b6 = document.getElementById("6");
b6.addEventListener("click",()=> display.textContent += "6");
const b7 = document.getElementById("7");
b7.addEventListener("click",()=> display.textContent += "7");
const b8 = document.getElementById("8");
b8.addEventListener("click",()=> display.textContent += "8");
const b9 = document.getElementById("9");
b9.addEventListener("click",()=> display.textContent += "9");
const bDeci = document.getElementById(".");
bDeci.addEventListener("click",() => {
    stringArray = Array.from(display.textContent);
        if(stringArray.length == 0)
        {
            display.textContent += "0."
        }
        else
        {

            

            stringArray = Array.from(display.textContent);

            let individualNumbers = 1;


            let loc;

            for(let i = 1; i < stringArray.length; i++)
            {
                if(numbers.includes(stringArray[i]) && operators.includes(stringArray[i-1]))
                {
                    let loc = i;

                    if(stringArray.slice(loc,-1).includes("."))
                        return
                    else
                    {
                        stringArray.textContent += ".";
                        return;
                    }
                        


                }
            }

            if(stringArray.slice(0,loc).includes("."))
                return;
            else
                stringArray.textContent += ".";
           
        }
})


// Operation Buttons
const bDiv = document.getElementById("/");
bDiv.addEventListener("click",()=>{
    compactEquation();
    if(operatorApproved())
        display.textContent+="/";
})

const bMul = document.getElementById("x");
bMul.addEventListener("click",()=>{
    compactEquation();
    if(operatorApproved())
        display.textContent+="x";
})

const bSub = document.getElementById("-");
bSub.addEventListener("click",()=>{
    compactEquation();
    if(operatorApproved())
        display.textContent+="-";
})


const bAdd = document.getElementById("+");
bAdd.addEventListener("click",()=>{
    compactEquation();
    if(operatorApproved())
        display.textContent+="+";
})


const bEqu = document.getElementById("=");
bEqu.addEventListener("click",()=>compactEquation());

//Clear Button
display.addEventListener("click",()=>display.textContent="");

//Functions to make the calculator work correctly

// function numberTrack(){
    
// }

function compactEquation(){
    stringArray = Array.from(display.textContent);

    let individualNumbers = 0;

    if(numbers.includes(stringArray[0]))
        individualNumbers++;

    for(let i = 1; i < stringArray.length; i++)
    {
        if(numbers.includes(stringArray[i]) && operators.includes(stringArray[i-1]))
            individualNumbers++;
    }

    numTracker.textContent = "Individual number: " + individualNumbers;

    if(individualNumbers == 2)
    {
        //Get the Individual Numbers

        test.textContent = "Step 1 Completed";


        for(let i = 0; i < stringArray.length; i++)
        {      
            //If Operator is found at current Index
            if(operators.includes(stringArray[i]))
            {
                test.textContent = "Step 2 complete?";
                let operator = stringArray[i];
                test.textContent = toString(operator);

                let num1 = Number(stringArray.slice(0,i).join(""));
                let num2 = Number(stringArray.slice(i+1).join(""));


                // Find a Way to turn an array of numbers => array of strings => combine into 2 string arrays => turn them both to number => finish the problem
                test.textContent = num1 + " " + operator + " " + num2;

                if(operator == "+")
                    display.textContent = add(num1,num2)
                else if(operator == "-")
                    display.textContent = subtract(num1,num2)
                else if(operator == "x")
                    display.textContent = multiply(num1,num2)
                else
                    display.textContent = divide(num1,num2)

                // return 0;
            }
           
        }

       

        //Turn the Array of Numbers into one singular value using the reduce function

        
        //Rremove current problem and replace it with the new value
        //Then add the next operator if they pressed another operator before
        
        
    


        //Compact Equation
    }
}

function operatorApproved(){
    stringArray = Array.from(display.textContent);
    if(display.textContent != "")
        if(numbers.includes(stringArray[stringArray.length-1]))
            return true;
    return false;
}

const add = (x, y) => Number(x+y);
const subtract = (x, y) => Number(x-y);
const divide = (x, y) => Number(x/y);
const multiply = (x, y) => Number(x*y);



