const validPin = 1234

// function to get values 

function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue;

}


// add money feature 
document.getElementById('add-money-btn')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const bank = getInputValue('bank')
        const accountNumber = getInputValue('account-number')

        const amount = getInputValueNumber('add-amount')

        const pinNumber = getInputValueNumber('add-pin')

        const avalableBalance = parseInt(document.getElementById('available-balance').innerText)

        if (accountNumber.length < 11) {
            alert('Please Provide Valid account Number')
            return;
        }
        if (pinNumber !== validPin) {
            alert('Please Provide Valid PIN Number')
            return;
        }



        const totalNewAvailableBalance = amount + avalableBalance;

        document.getElementById('available-balance').innerText = totalNewAvailableBalance;


        console.log(avalableBalance, amount, totalNewAvailableBalance)
    })


// cash out feature 
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber('withdraw-amount')
    const avalableBalance = parseInt(document.getElementById('available-balance').innerText)


    const totalNewAvailableBalance = avalableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;


})


// toggle feature 
document.getElementById('add-button').addEventListener('click', function () {
    document.getElementById('cashout-parent').style.display = "none"
    document.getElementById('add-money-parent').style.display = 'block'
})

document.getElementById('cashout-button').addEventListener('click', function () {
    document.getElementById('add-money-parent').style.display = "none"
    document.getElementById('cashout-parent').style.display = 'block'
})