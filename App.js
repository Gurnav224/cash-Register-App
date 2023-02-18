const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#checkButton');
const errorMessage = document.querySelector('#error-message');
const notesInTable = document.querySelectorAll('.no-of-notes')

let availableNotes = [2000,500,100,20,10,5,1];
hideMessage();
checkButton.addEventListener('click',function validateBillAndCashAmount(){
hideMessage();
    if(billAmount.value >0){
       if( parseInt(cashGiven.value)>=parseInt(billAmount.value)){
        const amountToBeReturned =  cashGiven.value-billAmount.value;
        calculatChange(amountToBeReturned)
       }
       else{
        showMessage("The cash provided should be atleast be equal to the bill amount")
       }
    }
    else{
        showMessage("The bill amount should be greater than 0")
    }

    
})


function calculatChange(amountToBeReturned){

    for(let i=0; i<availableNotes.length; i++){
        let noOfNotes = Math.trunc(  amountToBeReturned/availableNotes[i]);

      
        amountToBeReturned = Math.trunc(  amountToBeReturned%availableNotes[i]);
     
        notesInTable[i].innerText = noOfNotes;

    }
}



function hideMessage(){
    errorMessage.style.display = 'none'
}

function showMessage(msg){
   errorMessage.innerText = msg;
   errorMessage.style.display = 'block';

}