const billAmount= document.querySelector('#bill-amount');
const cashGiven=document.querySelector('#cash-amount');
const checkButton=document.querySelector('.submit');
const errorMessage=document.querySelector(".error-message");





checkButton.addEventListener("click",function validateBillAndCashAmount(){
    errorMessage.style.display="None";

    if(billAmount.value>0){
        showMessage("you are ready to go")
    }
    else{
        showMessage("Bill amount should be greater than 0")
    }
}

);

//it will show an error message
function showMessage(message){
    errorMessage.style.display="block";
    errorMessage.innerText=message;
}