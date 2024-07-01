const form = document.querySelector('#forms');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirmpassword');


form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }
});


function validateInputs() {
    const fullnameVal = fullname.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const confirmpasswordVal = confirmpassword.value.trim();
    let success = true


    if (fullnameVal === ''){
        success = false;
        setError(fullname, 'Full name is required');
    }
    else{
        setSuccess(fullname);
    }


    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    }
    else {
        setSuccess(email);
    }


    if (phoneVal === ''){
        success = false;
        setError(phone, 'Phone number is required');
    }
    else{
        setSuccess(phone);
    }


    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be atleast 8 characters');
    }
    else {
        setSuccess(password);
    }

     
    if (confirmpasswordVal === '') {
        success = false;
        setError(confirmpassword, 'Confirm Password is required');
    }
    else if (confirmpasswordVal !== passwordVal) {
        success = false;
        setError(confirmpassword, 'Confirm Password does not match');
    }
    else {
        setSuccess(confirmpassword);
    }

    return success;
}


function setError(element, message) {
    const validationform = element.parentElement;
    const errorElement = validationform.querySelector('.error');

    errorElement.innerText = message;
    validationform.classList.add('error');
    validationform.classList.remove('success');
}


function setSuccess(element) {
    const validationform = element.parentElement;
    const errorElement = validationform.querySelector('.error');

    errorElement.innerText = '';
    validationform.classList.add('success');
    validationform.classList.remove('error');
}


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        );
};