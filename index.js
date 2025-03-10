const keypad = document.getElementById("keys")
const display = document.getElementById("display")

document.body.addEventListener("click", function (event) {
    if (event.target.matches(".buttons")) {
        switch(event.target.textContent){
            case "=":
                let answer = eval(display.textContent)
                display.textContent = answer
                break
            case "Clear":
                display.textContent = ""
                break
            default: 
                display.textContent += event.target.textContent
            
        }
    }
});


for (i = 9; i>=0; i--){
    var newButton = document.createElement("button")
    newButton.textContent = i
    newButton.classList.add("buttons")
    keypad.appendChild(newButton)
}

const operators = ["+","-","x","/",".","Clear","<--","="]
for (i = 0; i<operators.length; i++){
    var newButton = document.createElement("button")
    newButton.textContent = operators[i]
    newButton.classList.add("buttons")
    keypad.appendChild(newButton)
}
