let inputEmail = document.getElementById("email"),
    inputPhone = document.getElementById("phone"),
    textArea = document.getElementById("content"),
    btn = document.getElementById("search"),
    out = document.getElementById("out"),
    regEmail = /^[A-Za-z\d\-#&\?\\_"\(\)\.\s\;\:\]\[\{\}]+@\w+.[\w|\d]+$/,
    regEmailTextArea = /^[A-Za-z\d\-#&\?\\_"\(\)\.\s\;\:\]\[\{\}]+@\w+.[\w|\d]+$/,
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

    // >>>>>>>>>>>Только одна почта без текста!!!!!<<<<<<<<<<<<<<


    // условие
    // проверка
    // создание div с классом email_out

    for(let i = 0; i < regEmailTextArea.exec(textArea.value).length; i++) {

        let divValue = (regEmailTextArea.exec(textArea.value)[i]),
            div = document.createElement("div").classList.add("email_out");

            div.innerHTML = divValue;
            // console.log(div)
        

            
    // Добавить текст почты в div

    }
})