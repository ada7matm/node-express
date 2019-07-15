const loginForm = document.getElementById('login-form');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const invalidLoginMessage = document.getElementById('invalid-login-message');
const errorMessage = document.getElementById('error-message');

loginForm.onsubmit = (event) => {
    event.preventDefault();
    loginUser();
}

const loginUser = () => {

}