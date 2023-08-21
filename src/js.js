var showModalButton;
var modal;

function onLoad() {
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
        submit(e)
    });
    showModalButton = document.getElementById("showModalBtn");
    modal = document.getElementById("successModal");
};

function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

const dismissButton = document.getElementById("btnsubs");

function closeModal() {
    modal.classList.add("hidden");
};

function getEmail(e) {
    const email = document.querySelector("#email");
    const value = email.value;
    document.getElementById("display-email").innerHTML = email.value;
};

function submit(e) {
    e.preventDefault();
    getEmail();
    openModal();
}

function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Valid email required";
    }

}

function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Valid email required") {
        error.innerHTML = "";
    }
}

window.addEventListener('load', onLoad);
