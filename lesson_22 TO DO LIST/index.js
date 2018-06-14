let btn = document.querySelector("#todo__btn");
    // close = document.querySelector("ul li span");
    // li = document.createElement("li");
    liAll = document.querySelectorAll("li");



btn.addEventListener ("click", () => {
    let input = document.querySelector("#todo__field"),
        inputValue = input.value,
        ul = document.querySelector("#todo__items"),
        li = document.createElement("li");
        liAll = document.querySelectorAll("li");
        
    localStorage.setItem("task", input.value)

    if (inputValue != "" && inputValue.length <= 100) {
        ul.appendChild(li)
        li.innerHTML = inputValue + "<span></span>";
        input.value = "";
        
    } else {
        alert("WARNING! Please enter your task correctly")
    }

    if (liAll.length % 2 == 0) {
        li.style.listStyleType = "square";
    } else {
        li.style.listStyleType = "circle";
    };

// Удаляем элемент li из списка

    li.querySelector("span").addEventListener("click", () => {
        li.classList.add("todo__hide")
    })

    // let close = document.querySelectorAll("ul li span");
        
    //     for(let i = 0; i < liAll.length; i++) {

    //         for(let j = 0; j < close.length; j++) {
    //             close[j].addEventListener("click", function() {
    //                 li.classList.add("todo__hide");
    //             })
    //         }
    //     }
});