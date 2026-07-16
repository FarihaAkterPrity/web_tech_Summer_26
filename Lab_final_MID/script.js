let passwordAttempts = 0;
const MAX_ATTEMPTS = 3;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => span.textContent = '');
    document.getElementById('success-message').classList.add('hidden');

    let isValid = true;

    
    const firstName = document.getElementById('firstName').value.trim();
    const alphaRegex = /^[A-Za-z]+$/;
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        isValid = false;
    } else if (!alphaRegex.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name must contain alphabets only.';
        isValid = false;
    }
    
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        isValid = false;
    } else if (!alphaRegex.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name must contain alphabets only.';
        isValid = false;
    }

    
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === '' || confirmPassword === '') {
        if (password === '') document.getElementById('passwordError').textContent = 'Password is required.';
        if (confirmPassword === '') document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        passwordAttempts++;
        isValid = false;
        
        if (passwordAttempts >= MAX_ATTEMPTS) {
            document.getElementById('confirmPasswordError').textContent = `Passwords do not match. Maximum attempts reached (${MAX_ATTEMPTS}/3). Form Locked.`;
            document.getElementById('submitBtn').disabled = true;
        } else {
            document.getElementById('confirmPasswordError').textContent = `Passwords do not match. Attempt ${passwordAttempts} of ${MAX_ATTEMPTS}.`;
        }
    }

    
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        isValid = false;
    }

    
    const servicesSelected = document.querySelectorAll('input[name="services"]:checked');
    if (servicesSelected.length === 0) {
        document.getElementById('servicesError').textContent = 'Please select at least one preferred service.';
        isValid = false;
    }

    
    const department = document.getElementById('department').value;
    if (department === '') {
        document.getElementById('departmentError').textContent = 'Please select a valid doctor department.';
        isValid = false;
    }

    
    const description = document.getElementById('description').value.trim();
    if (description.length < 20) {
        document.getElementById('descriptionError').textContent = `Health description must be at least 20 characters (Current: ${description.length}).`;
        isValid = false;
    }

    
    if (isValid) {
        
        document.getElementById('success-message').classList.remove('hidden');
        
        
        document.getElementById('registrationForm').reset();
        passwordAttempts = 0; 
    }
});