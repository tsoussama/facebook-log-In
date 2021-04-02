const email = document.querySelector(".email");
const password = document.querySelector(".passin");
const btn = document.querySelector(".btn");
btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(email.value);
    console.log(password.value);
});