function checkPass() {
    const pass = document.getElementById('password')
    const confirmPass = document.getElementById('confirm-password')
    const err = document.getElementById('error')

    if(pass.value == confirmPass.value){
        document.getElementById('submit').disabled = false;
        err.style.visibility = 'hidden'
        pass.classList.remove('error')
        confirmPass.classList.remove('error')
    } else {
        document.getElementById('submit').disabled = true;
        err.style.visibility = 'inherit'
        pass.classList.add('error')
        confirmPass.classList.add('error')
    }
}