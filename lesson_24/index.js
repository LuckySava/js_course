let inputEmail = document.getElementById("email"),
    inputPhone = document.getElementById("phone"),
    textArea = document.getElementById("content"),
    btn = document.getElementById("search"),
    out = document.getElementById("out"),
    regEmail = /^[A-Za-z\d\-#&\?\\_"\(\)\.\s\;\:\]\[\{\}]+@\w+.[\w|\d]+$/,
    regEmailTextArea = /[A-Za-z\d\-#&\?\\_"\(\)\.\s\;\:\]\[\{\}]+@\w+.[\w|\d]+/gm,
    regPhone = /^\+38(\(0\d{2}\)|0\d{2})\d{3}-?\d{2}-?\d\d$/;


inputEmail.addEventListener("focus", function() {
    
    if (!regEmail.test(inputEmail.value)) {
        inputEmail.classList.add("wrong");
    } else {
        inputEmail.classList.add("right");
    }
})

inputPhone.addEventListener("focus", function() {
    
    if (!regEmail.test(inputPhone.value)) {
        inputPhone.classList.add("wrong");
    } else {
        inputPhone.classList.add("right");
    }
})

btn.addEventListener("click", function() {
    // условие

    
})