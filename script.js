function showPassword(){
    const userInput = document.getElementById('password');
    const showPasswordToggle = document.getElementById('show-password');
    const hidePasswordToggle = document.getElementById('hide-password');
    
    if(userInput.value !== 0){
        userInput.type = "text";
        showPasswordToggle.style.display = "none";
        hidePasswordToggle.style.display = "inline";
    }
}

function hidePassword(){
    const userInput = document.getElementById('password');
    const showPasswordToggle = document.getElementById('show-password');
    const hidePasswordToggle = document.getElementById('hide-password');

    if(userInput.value !== 0){
        userInput.type = "password";
        showPasswordToggle.style.display = "inline";
        hidePasswordToggle.style.display = "none";
    }
    
}