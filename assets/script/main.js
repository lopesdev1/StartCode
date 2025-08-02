let trilho = document.getElementById('trilho');
body = document.querySelector('body');

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
})


function teste(){
    window.location.href = "login.html";
}