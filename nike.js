const para = document.getElementById('h6');
para.addEventListener('click', updateName);
function updateName(){
    const name = prompt('Enter a new name');
    para.textContent = `Player1: ${name}`;
}