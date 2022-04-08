
function password(){
    const ver = document.getElementById('eye');
    const naoVer = document.getElementById('eye-slash');
    const senha = document.getElementById('senha');

    if( ver.style.display === 'none'){

        ver.style.display = 'block';
        naoVer.style.display = 'none';
        senha.type = 'text';

    } else{
        ver.style.display = 'none';
        naoVer.style.display = 'block';
        senha.type = 'password';

    }
};

document.getElementById('btn').addEventListener('click', function (e){
    e.preventDefault();
});