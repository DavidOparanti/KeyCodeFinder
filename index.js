window.onkeydown = getKeycode;
window.onclick = showMessage;

function showMessage(){
    document.getElementById("code").innerHTML = "<span style='color: red; font-size: 30px;'>Use the keyboad</span>"
    document.getElementById("mine").innerHTML = '';
}

function getKeycode(e){
    document.getElementById("code").innerText = e.keyCode;
    document.getElementById("mine").innerText = e.key;
}

