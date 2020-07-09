const figuresKey = document.getElementById("figuresKey");
const figuresWhich = document.getElementById("figuresWhich");
const figuresCode = document.getElementById("figuresCode");


document.addEventListener("keydown", function(e){
    figuresKey.innerHTML = e.which;
    figuresWhich.innerHTML = e.key;
    figuresCode.innerHTML = e.code;
    if(e.which == 20) {
        alert("Caps lock is on, turn it off!");
    }
});