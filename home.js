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
// function to get innertext 

function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}

// function to set inner text 
function setInnerText(value) {
    const avalableBalanceElement = document.getElementById('available-balance')
    avalableBalanceElement.innerText = value;

}

// function to toggle 
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');

    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}


// add money feature 
document.getElementById('add-money-btn')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const bank = getInputValue('bank')
        const accountNumber = getInputValue('account-number')

        const amount = getInputValueNumber('add-amount')

        const pinNumber = getInputValueNumber('add-pin')

        const avalableBalance = getInnerText('available-balance')

        if (accountNumber.length < 11) {
            alert('Please Provide Valid account Number')
            return;
        }
        if (pinNumber !== validPin) {
            alert('Please Provide Valid PIN Number')
            return;
        }



        const totalNewAvailableBalance = amount + avalableBalance;

        setInnerText(totalNewAvailableBalance);


        console.log(avalableBalance, amount, totalNewAvailableBalance)
    })


// cash out feature 
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber('withdraw-amount')
    const avalableBalance = getInnerText('available-balance')


    const totalNewAvailableBalance = avalableBalance - amount;

    setInnerText(totalNewAvailableBalance);


})


// toggle feature 
document.getElementById('add-button').addEventListener('click', function (e) {
    handleToggle('add-money-parent')
})
document.getElementById('cashout-button').addEventListener('click', function (e) {
    handleToggle('cashout-parent')
})
document.getElementById('transfer-button').addEventListener('click', function (e) {
    handleToggle('transfer-parent')
})
document.getElementById('bonus-button').addEventListener('click', function (e) {
    handleToggle('get-bonus-parent')
})
document.getElementById('pay-bill-button').addEventListener('click', function (e) {
    handleToggle('pay-bill-parent')
})
document.getElementById('transaction-button').addEventListener('click', function (e) {
    handleToggle('transaction-parent')
})

