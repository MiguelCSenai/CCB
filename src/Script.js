var emailInput = document.getElementById('EmailInput');
var emailLabel = document.querySelector('label[for="EmailInput"]');

emailInput.addEventListener('input', function(){

    if(emailInput.value.trim() === ''){

        emailLabel.classList.remove('active');

    }else{

        emailLabel.classList.add('active')

    }

});