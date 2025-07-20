
const input1 = document.getElementById('input')
const buttons = document.getElementsByClassName('buttons')
const op = document.getElementsByClassName('op')


function addNum(num) {
    let prev = "";
    if (input1.innerHTML.length > 0) {
        prev = input1.innerHTML.charAt(input1.innerHTML.length - 1)
        if (prev == '.' && num == '.') {
            return; // Prevent adding a second dot  
        }
    }
    input1.innerHTML += String(num)
}

function Clear() {
    input1.innerHTML = ""
}

function Evaluate() {  
    result = (eval(input1.innerHTML));
    input1.innerHTML = String(result);
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
