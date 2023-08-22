var showModalButton;
var modal;
var content;

function onLoad() {
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
        submit(e)
    });
    showModalButton = document.getElementById("showModalBtn");
    modal = document.getElementById("successModal");
    content = document.getElementById("content");
};

function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    content.classList.remove("grid");
    content.classList.add("hidden");
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

function validarEmail(value) {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    var regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    var isValid = regex.test(value);
    redefinirMsg();

    if (!isValid) {
        error.innerHTML = "Valid email required";
        email.setCustomValidity("Valid email required");
        email.classList.remove("valid:border-[#04aa6d]");
        email.classList.remove("valid:bg-white");
        email.classList.add("invalid:border-red-700");
        email.classList.add("invalid:bg-[#fee8e6]");
        showModalButton.setAttribute("disabled", true);

    } else {
        email.classList.remove("invalid:border-red-700");
        email.classList.remove("invalid:bg-[#fee8e6]");
        email.classList.add("valid:border-[#04aa6d]");
        email.classList.add("valid:bg-white");
        email.setCustomValidity("");

        showModalButton.removeAttribute("disabled");
    }

}

function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Valid email required") {
        error.innerHTML = "";
    }
}

window.addEventListener('load', onLoad);