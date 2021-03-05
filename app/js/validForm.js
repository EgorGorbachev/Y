let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let sendButton = document.querySelector('#send-button');
let form = document.querySelector('.contacts-form-main');
let check = 0;

function submit() {
    form.reset();
    alert('Your application has been successfully accepted!');
};

function testString () {
    let nameValue = name.value;
    if (!/^[a-zA-Z]+$/.test(nameValue) && !/^[а-яА-Я]+$/.test(nameValue)){
        name.style.backgroundColor = `rgb(245, 170, 170)`;
        check = 1;
    }else {
        name.style.backgroundColor = `transparent`;
        check = 0;
    }
};

function testEmail () {
    let emailValue = email.value;
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailValue)){
        email.style.backgroundColor = `rgb(245, 170, 170)`;
        check = 1;
    }else {
        email.style.backgroundColor = `transparent`;
        check = 0;
    }
};

function testPhone () {
    let phoneValue = phone.value;
    if (!/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phoneValue)){
        phone.style.backgroundColor = `rgb(245, 170, 170)`;
        check = 1;
    }else {
        phone.style.backgroundColor = `transparent`;
        check = 0;
    }
};

name.addEventListener('blur', function(e){
    testString();
});

email.addEventListener('blur', function(e){
    testEmail();
});

phone.addEventListener('blur', function(e){
    testPhone();
});

form.addEventListener('submit', function(event){
    event.preventDefault();
    if (check == 0 && name.value != '' && email.value != '' && phone.value != ''){
        submit();
    } else 
    if (check == 1) {
        alert ('You entered incorrect values!');
    } else 
    if (name.value != '' || email.value != '' || phone.value != ''){
        alert ('Fill in the blank fields!')
    } else {
        alert('You need to fill in the fields!')
    }
});

