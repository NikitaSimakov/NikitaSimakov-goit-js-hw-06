const form = document.querySelector('.login-form');
form.addEventListener('submit', onLog)
function onLog(event) {
    event.preventDefault();
    // console.dir(event);
    // console.log(event.currentTarget.elements.email);
    // console.log(event.currentTarget.elements.password);

    const {email, password} = event.currentTarget.elements;

if (email.value === '' || password.value === '') {
    alert(`Все поля должны быть заполнены`);
}
const objValues = {
    email: email.value,
    password: password.value,
};
console.log(objValues);
console.log(`email: ${email.value}, password: ${password.value}`);
event.currentTarget.reset();
}