//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
let i = 0;

const myButton = document.querySelector('.btn.btn-outline-secondary');
const myBody = document.querySelector('body');

   //myButton.addEventListener('click', () => {
 //   myBody.style.backgroundColor = 'red';});


myButton.addEventListener('click', () => {
    myBody.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;});
    
    
 