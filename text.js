let emoji = document.querySelector(".emoji");
let emojis = ['😁','😂','😍','😘','🥰','🤩','😪','😴','😥','🤩','👽'];

emoji.addEventListener("mouseover", () => emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)])

//##########################################

let btns = document.querySelectorAll(".btn-cont button");
let body = document.querySelector(".contaner-two");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let color = e.target.className;
        changeColor(color);
    })
})

function changeColor(color) {
    for(let btn of btns) {
        if(btn.className === color){
            body.classList.add(color);
        } else {
            body.classList.remove(btn.className)
        }
    }
}

//###########################################

const panel = document.querySelector("#panel");
const panelBtn = document.querySelector("#send");
const ratingsContainer = document.querySelector(".ratings-contaner");
const ratings = document.querySelectorAll(".rating");
let error = document.querySelector(".error");

let selectorRating = "";

ratingsContainer.addEventListener("click", e => {
    if(e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectorRating = e.target.nextElementSibling.innerText;
    } 
})

panelBtn.addEventListener("click", ()=> {
    if(selectorRating ==="") {
        error.style.display = "block"
    }else{
        panel.innerHTML= `
        <p class="icon">💖</p>
        <strong>Thanks for Your Feedback</strong>
        <p style="margin-top: 10px">Feedback: ${selectorRating}</p>`
    }
})

function removeActive() {
    for(let rating of ratings) {
        rating.classList.remove("active");
    }
}

//###################################

let insert = document.querySelector("#insert");

window.addEventListener("keypress", (e) => {
    insert.innerHTML = `
    <div class="key">
        <div class="cont">
            <small>event.key</small>
            <p>${e.key}</p>
        </div>
        <div class="cont">
            <small>event.keyCode</small>
            <p>${e.keyCode}</p>
        </div>
        <div class="cont">
            <small>event.code</small>
            <p>${e.code}</p>
        </div>
    </div>`
})

//############################################

let mainBtn = document.querySelector(".container-five #btn");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let arith = document.querySelector("#selectOp");
let main = document.querySelector(".main")

mainBtn.addEventListener("click", ()=> {
    let result = getResult(+num1.value, +num2.value, arith.value);
    main.innerHTML = `
    <h1>Result:</h1>
    <input style ="cursor:auto;" readonly type = "text" value = ${result}>`;
})

function getResult(num1, num2, arith) {
    if(arith === 'plus') {
        return num1 + num2;
    }else if(arith === 'min'){
        return num1 - num2;
    }else if(arith === 'dev') {
        return (num1 / num2).toFixed(2);
    }else if (arith === 'multi') {
        return num1 * num2;
    }
}

//####################################################

let todoInp = document.querySelector(".container-six input");
let form = document.querySelector(".container-six form");
let todos = document.querySelector(".container-six .todos");

function getTodo (value) {
    let todo = document.createElement("div");
    let textEl = document.createElement("span");
    let closeEl = document.createElement("span");

    textEl.innerHTML= value;
    closeEl.innerHTML = "&times;"

    todo.append(textEl, closeEl);

    closeEl.classList.add("delete");
    todo.classList.add("todo");

    closeEl.addEventListener("click", () => {
        todos.removeChild(todo);
    })

    return todo;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    let value = todoInp.value;
    if(!value.trim()) return;
    todos.appendChild(getTodo(value))
    todoInp.value= "";
})

