import throttle from 'lodash.throttle';
const dataForm = {}; 


const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
returnText();


function onFormInput(e) { 
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

function returnText() {
    const savedData = localStorage.getItem('feedback-form-state');
    const parsedData = JSON.parse(savedData);
    if (parsedData) {
        input.value = parsedData.email;
        textarea.value = parsedData.message;
    }
};

