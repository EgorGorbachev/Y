document.querySelector(".menu-burger").onclick=function(){
    document.querySelector(".menu-burger").classList.toggle("active");
    document.querySelector(".min-nav").classList.toggle("active");
};

let modalBtn=document.querySelectorAll(".modal-button");
let modal=document.querySelector(".modal-wrapper");
let body=document.querySelector("body");
let paddingRight=window.innerWidth-body.offsetWidth;

modal.addEventListener('click', function(e){
    if (this === e.target) {
      closeModal();
    }
});
  

for(var i = 0 ; i < modalBtn.length; i++ ){
    modalBtn[i].addEventListener("click",(function(){
        showModal();
    }))
};

    
function showModal(){
    modal.classList.add("modal-active");
    body.classList.add("hidden-scroll");
    body.style.paddingRight = paddingRight+"px";
}
    
function closeModal(){
    body.style.paddingRight = "0";
    body.classList.remove("hidden-scroll");
    modal.classList.remove("modal-active")
}

let modalName = document.querySelector('#modal-name');
let modalPhone = document.querySelector('#modal-phone');
let modalButton = document.querySelector('.modal-form-button');
let modalForm = document.querySelector('#modal-form');
let modalCheck = 1;

function submitModal() {
    modalForm.reset();
    modalName.style.backgroundColor = `#a0a8be07`;
    modalPhone.style.backgroundColor = `#a0a8be07`;
    alert('Your application has been successfully accepted!');
};

function testStringModal () {
    let modalNameValue = modalName.value;
    if (!/^[a-zA-Z]+$/.test(modalNameValue) && !/^[а-яА-Я]+$/.test(modalNameValue)){
        modalName.style.backgroundColor = `rgb(245, 170, 170)`;
    }else {
        modalName.style.backgroundColor = `#a0a8be07`;
        modalCheck = 0;
    }
};

function testPhoneModal () {
    let modalPhoneValue = modalPhone.value;
    if (!/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(modalPhoneValue)){
        modalPhone.style.backgroundColor = `rgb(245, 170, 170)`;
    }else {
        phone.style.backgroundColor = `#a0a8be07`;
        modalCheck = 0;
    }
};

modalName.addEventListener('blur', function(e){
    testStringModal();
});

modalPhone.addEventListener('blur', function(e){
    testPhoneModal();
});

modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    if (modalCheck == 0 && modalName.value != '' && modalPhone.value != ''){
        submitModal();
    } else 
    if (modalCheck == 1) {
        alert ('You entered incorrect values!');
    } else 
    if (modalName.value != '' || modalPhone.value != '' ){
        alert ('Fill in the blank fields!')
    } else {
        alert('You need to fill in the fields!')
    }
});