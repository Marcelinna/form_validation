
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password_check');

form.addEventListener("submit", event => {
	event.preventDefault();
    
    ValidationInputs();
});

function ValidationInputs() {
	
    const usernameValue = username.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim()
	const passwordCheckValue = passwordCheck.value.trim()
    
    if(usernameValue === "") {
		setError(username, "Username cannot be blank");
	} else {
		setSuccess(username);
    }
    
    const check_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(emailValue === "") {
		setError(email, "Email cannot be blank");
	} else if (!check_email.test(emailValue)) {
		setError(email, "Email is not valid example: surname@gmail.com");
	} else {
		setSuccess(email);
	}
	
	if(passwordValue === "") {
		setError(password, "Password cannot be blank");
	} else {
		setSuccess(password);
	}
	
	if(passwordCheckValue === "") {
		setError(passwordCheck, "Password check cannot be blank");
	} else if(passwordValue !== passwordCheckValue) {
		setError(passwordCheck, "Passwords does not match");
	} else{
		setSuccess(passwordCheck);
	}
}

function setError(input, message) {
    const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('p');
	formControl.className = 'form-control error';
	errorMessage.innerText = message;
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	



















