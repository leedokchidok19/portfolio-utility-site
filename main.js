const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

//text transformation select box
const select_box = document.querySelector('#word__select');

const optionList = [
                    {key:'대문자', value:1},
                    {key:'소문자', value:2},
                    {key:'카멜 표기법', value: 0},
                    {key:'파스칼 표기법', value: 0},
                    {key:'스네이크 표기법', value: 0},
                    ];

for(let i =0; i < optionList.length;i++) {
    var opions = new Option();
    opions.value = optionList[i].value;
    opions.text = optionList[i].key;
    select_box.add(opions);
}

select_box.addEventListener('change', (e) => {
    let index = e.target.options.selectedIndex;
    let target = e.target.options[index].innerText;
    let option = e.target.value;
    console.log(option);
    if(option === "0") {
        alert(`${target} 미구현된 기능입니다.`);
    }
})

//text
const word = document.querySelector('#word__transformation');

//doText
word.addEventListener('keyup', (e) => {
    let text = e.target.value;
    doUppercase(text);
    doLowercase(text);
})

//text uppercase
const uppercase = document.querySelector('#word__uppercase');
function doUppercase(text) {
    return uppercase.value = text;
}

//text lowercase
const lowercase = document.querySelector('#word__lowercase');
function doLowercase(text) {
    return lowercase.value = text;
}