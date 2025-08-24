const validPin =1234




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