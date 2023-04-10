const amount = document.querySelector('#amount');
const name = document.querySelector('#name');
const share = document.querySelector('#share');
share.addEventListener('click',()=>{
    const monto = prompt("Monto: ");
    const nombre = prompt("Nombre: ");
    amount.textContent = monto; 
    name.textContent = nombre;
})




