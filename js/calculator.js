var numbers = document.querySelectorAll("li"); 
var calc = document.querySelector(".calc");
var ope = document.querySelectorAll(".ope");
var result = document.querySelector(".result");
var supp = document.querySelector(".supp");
var clear = document.querySelector(".clear");
var entry1 = "";
var entry2 = "";
var entryOp = "";
var memSupp = 0;
var memAdd = 0;
var part1 = ".key_";		

//Clavier
document.addEventListener("keydown", function(event)
{
    var touch = document.querySelector(part1 + event.keyCode);
    touch.classList.add("active");
    touch.click();			
});

document.addEventListener("keyup", function(event)
{
    var touch = document.querySelector(part1 + event.keyCode);
    touch.classList.remove("active");
});

//Sauvegarde des nombres
for(var i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener("click", stockNumber);
}

//Sauvegarde de l'opérateur
for(var i = 0; i < ope.length; i++)
{
    ope[i].addEventListener("click", stockOpe);
}

//Calcul
calc.addEventListener("click", function()
{
    if(entry1 === "0" && entry2 === "0")
    {
        result.innerHTML = "Seriously?";
    }
    else
    {
        result.innerHTML = entry1 + " " + entryOp + " " + entry2 + " = " + calculate(entry1, entryOp, entry2);
    }
    clear_result();
});

//Réinitialisation
clear.addEventListener("click", function()
{
    clear_result();
    result.innerHTML = "";
})

//Suppression caractère par caractère
supp.addEventListener("click", function()
{
    supp_result();
})

function supp_result()
{
    if(entryOp === "")
    {
        entry1 = entry1.slice(0, entry1.length - 1); 
        result.innerHTML = entry1;
    }
    else
    {	
        if(entry2 === "")
        {
            entryOp = "";
            result.innerHTML = entry1;
        }
        else
        {
            if(entry2.length > 1)
            {
                if(memSupp === 0)
                {
                    memSupp = entry2.slice(0, entry2.length - 1); 
                    entry2 = memSupp;
                    result.innerHTML = entry1 + " " + entryOp + " " + entry2;
                    console.log(entry2);
                }
                else
                {
                    memSupp = entry2.slice(0, entry2.length - 1); 
                    entry2 = memSupp;
                    console.log(entry2);
                    result.innerHTML = entry1 + " " + entryOp + " " + entry2;	
                }
            }
            else
            {
                entry2 = "";
                result.innerHTML = entry1 + " " + entryOp;
                console.log(entry2);
            }
        }
    }
}

function clear_result()
{
    entry1 = "";
    entry2 = "";
    entryOp = "";	
    memSupp = 0;
    memAdd = 0;
}

function stockNumber()
{
    if(entryOp === "")
    {
        entry1 += this.textContent;
        result.innerHTML = entry1;
    }
    else
    {
        result.innerHTML += this.textContent
        if(entry2 === "")
        {
            memAdd = this.textContent;
            entry2 = memAdd;
        }
        else
        {
            memAdd += this.textContent;
            console.log(memAdd);
            entry2 = memAdd;
        }
    }
}

function stockOpe()
{
    entryOp = this.textContent;	
    result.innerHTML += " " + entryOp + " ";	
}

function calculate(nb1, operator, nb2)
{
    var total;
    switch(operator) 
    {
        case "+":
            total = addition(nb1, nb2);
            break;
        case "-":
            total = soustraction(nb1, nb2);
            break;
        case "*":
            total = multiplication(nb1, nb2);
            break;		
        case "/":
            total = division(nb1, nb2);
            break;		
        default:
            total = "erreur";
    } 
    return total;
}

function addition(number1, number2)
{
    return Number(number1) + Number(number2);
}

function soustraction(number1, number2)
{
    return number1 - number2;
}

function division(number1, number2)
{
    return number1 / number2;
}

function multiplication(number1, number2)
{
    return number1 * number2;
}