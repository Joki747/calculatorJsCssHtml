
const input1 = document.getElementById('input')
const buttons = document.getElementsByClassName('buttons')
const op = document.getElementsByClassName('op')
let lock = false

function addNum(num) {
    if (num == '.') {
        if (input1.innerHTML.includes('.')) {
            return;
        }
    }
    input1.innerHTML += String(num)   
}

function Clear() {
    input1.innerHTML = ""
}

function Evaluate() { 
    input1.innerHTML = String(eval(input1.innerHTML));    
}
function Delete() {
    input1.innerHTML = input1.innerHTML.slice(0,-1)
}

function addOp(op) {
    const input = input1.innerHTML
    const firstChar = input.charAt(0)
    const lastChar = input.charAt(input.length - 1)
    if (firstChar == "" && op !== "-") {
        return
    }
    if (lastChar.includes('+')) {
        return
    }
    if (lastChar.includes('-')) {
        return
    }
    if (lastChar.includes('*')) {
        return
    }
    if (lastChar.includes('/')) {
        return
    }
    input1.innerHTML += " "+String(op)
    
}

