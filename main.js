const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

//text
const word = document.querySelector('#word__transformation');

//doText
word.addEventListener('keyup', (e) =>{
    let text = e.target.value;
    doUppercase(text);
})

//text uppercase
const uppercase = document.querySelector('#word__uppercase');
function doUppercase(text) {
    return uppercase.value = text;
}
