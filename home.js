const validPin =1234



// add money feature 
document.getElementById('add-money-btn')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const bank = document.getElementById('bank').value 
        const accountNumber = document.getElementById('account-number').value 

        const amount = parseInt(document.getElementById('add-amount').value)

        const pinNumber = parseInt(document.getElementById('add-pin').value )

         const avalableBalance = parseInt(document.getElementById('available-balance').innerText)

        if(accountNumber.length < 11){
            alert('Please Provide Valid account Number')
            return;
        }
        if(pinNumber !== validPin){
            alert('Please Provide Valid PIN Number')
            return;
        }

       

        const totalNewAvailableBalance = amount + avalableBalance;

        document.getElementById('available-balance').innerText=totalNewAvailableBalance;


        console.log(avalableBalance , amount, totalNewAvailableBalance)
    })


    // cash out feature 
    document.getElementById('withdraw-btn').addEventListener('click', function(e){
        e.preventDefault()
        const amount = parseInt(document.getElementById('withdraw-amount').value )
        const avalableBalance= parseInt(document.getElementById('available-balance').innerText)


        const totalNewAvailableBalance = avalableBalance - amount;

        document.getElementById('available-balance').innerText=totalNewAvailableBalance;
        console.log(totalNewAvailableBalance)


    })


    // toggle feature 
    document.getElementById('add-button').addEventListener('click', function(){
        document.getElementById('cashout-parent').style.display = "none"
        document.getElementById('add-money-parent').style.display = 'block'
    })

    document.getElementById('cashout-button').addEventListener('click', function(){
        document.getElementById('add-money-parent').style.display = "none"
        document.getElementById('cashout-parent').style.display = 'block'
    })