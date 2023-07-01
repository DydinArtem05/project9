const calculateButton = document.querySelector("#calculate__tip");
const billAmount = document.querySelector("#bill");
const guestsNumber = document.querySelector("#number");
const serviceQuality = document.querySelector("#serviceQuality");
const tipAmount = document.querySelector("#tip__amount")

function calculate(){
    let everyPersonPayed = billAmount.value/guestsNumber.value;
    let sum = (everyPersonPayed * serviceQuality.value).toFixed(2);
    billAmount.value = '';
    guestsNumber.value = '';
    serviceQuality.value= '';
    if(sum == "NaN"){
        tipAmount.innerHTML = "Tip 0$ each";
        showAmount();
    }else{
        tipAmount.innerHTML = "Tip is " + sum + "$ each.";
        showAmount();
    }
}

function showAmount(){
    tipAmount.className = 'show';
    setTimeout(function(){tipAmount.className = tipAmount.className.replace('show', '')}, 3000)
}

calculateButton.addEventListener("click", calculate);