function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length ==4){
        return pin;
    }else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value= pin;
}

document.getElementById('key-pad').addEventListener("click", function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    } else{
        const preNumber = calcInput.value;
        const newNumber = preNumber +number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const number = document.getElementById('type-numbers').value;
    const errorPin = document.getElementById('message-error');
    const successPin = document.getElementById('message-success');
    if(pin ==number){
        successPin.style.display = 'block';
        errorPin.style.display = 'none';
    }else{
        successPin.style.display = 'none';
        errorPin.style.display = 'block';
    }


}