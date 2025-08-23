// login button function 
document.getElementById('loginButton')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const mobileNumber = 12345678910;
        const pinNumber = 1234;
        
        const mobileNumberValue = document.getElementById('mobile-number').value
        const mobileNumberValueConvertion = parseInt(mobileNumberValue);

        const pinNumberValue = document.getElementById('pin-number').value;
        const pinNumberValueConvertion = parseInt(pinNumberValue);
        

        if (mobileNumberValueConvertion === mobileNumber && pinNumberValueConvertion === pinNumber) {
            window.location.href = "home.html"
        } else {
            alert('Invalid Credential')
        }
    })
