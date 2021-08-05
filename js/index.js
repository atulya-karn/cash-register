const billAmount = document.querySelector("#bill-amount");
const givenAmount = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const returnAmount = document.querySelector("#return-Amount")
const changeTable = document.querySelector(".change-table")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
hideChangeTable();

checkButton.addEventListener("click", function  validBillandCashAmount(){
    hideMessage();
    
    if(billAmount.value > 0){
        if( givenAmount.value > billAmount.value ){
            const amountToBeReturned = givenAmount.value - billAmount.value;
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);
            returnAmount.innerText = amountToBeReturned;
            showChangetable();
        }else{
            showMessage("**The cash provided should atleast be equal to the bill amount")
            hideChangeTable();
            
        }
    }else{
        showMessage("**Invalid Bill Amount**")
        hideChangeTable();
    }
});

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++ ){
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned =amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg;
}

function hideChangeTable(){
    changeTable.style.display = "none";
}

function showChangetable(){
    changeTable.style.display = ""
}