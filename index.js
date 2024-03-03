let check = document.querySelector('#check');
let pass = document.querySelector('#pass');
check.addEventListener('click', () => {
    console.log(pass.type)
    if(pass.type == 'password') {
        pass.type = 'text';
    }
    else {
        pass.type = 'password';
    }
});