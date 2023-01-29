const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

passwordOneEl = document.getElementById("password1")
passwordTwoEl = document.getElementById("password2")

let password1 = ""
let password2 = ""
function generatePasswords() {
    password1 = ""
    password2 = ""
    
    for (let i = 0; i < 16; i++) {
        let randomCharac = characters[Math.floor(Math.random() * characters.length)]
        password1 += randomCharac
            }
            
    passwordOneEl.value = password1
        for (let i = 0; i < 16; i++) {
        let randomCharac = characters[Math.floor(Math.random() * characters.length)]
        password2 += randomCharac
    }
    
    passwordTwoEl.value = password2
    passwordOneEl.hidden = false
    passwordTwoEl.hidden = false
}

function copy(element) {
    var range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}


