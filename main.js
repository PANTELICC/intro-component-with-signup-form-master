function reset(val){
    val.style.borderColor='rgba(0, 0, 0, 0.164)';
    val.style.borderWidth = "1px"
    return;
}
function set(val){
    val.style.borderColor='hsl(0, 100%, 74%)';
    val.style.borderWidth = "2px"
    return;
}
let brojac = 0;
function provera(){
    //general
    let i;
    let input = document.getElementsByClassName("input")
    for(i = 0;i<input.length;i++){
        if(input[i].value == "") set(input[i]);
        else reset(input[i]);
    }
    //Email 
    let email = document.querySelector(".email")
    let ind = email.value.indexOf("@")

    if(ind == -1) set(email)
    else if(ind == email.value.length-1) set(email)
    else reset(email);
    
    //password
    let password = document.querySelector(".password");
    if(password.value.length < 8) set(password);
    else reset(password);
}

var btt = document.querySelector(".btt");
btt.addEventListener('click',provera);