const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

//.word__title
//text transformation select box
/*
const select_box = document.querySelector('#word__select');
const optionList = [
                    {key:'대문자', value:1, id:'word__uppercase'},
                    {key:'소문자', value:2, id:'word__lowercase'},
                    {key:'카멜 표기법', value: 0, id:'word__camelcase'},
                    {key:'파스칼 표기법', value: 0, id:'word__pascalcase'},
                    {key:'스네이크 표기법', value: 5, id:'word__snakecase'},
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

    if(option === "0") {
        alert(`${target} 미구현된 기능입니다.`);
        return false;
    }

    let wordId = optionList[index].id;
    wordForm(wordId);
})
*/
//.word__form-div
//word form
function wordForm(wordId) {
    const word_result = document.querySelector('.word__result');
    word_result.childNodes[0];
    const textarea = document.createElement('textarea');
    textarea.id = wordId;
    textarea.classList.add('word__form-text');
    textarea.cols = 50;
    textarea.rows = 10;
    textarea.maxLength = 500;
    
    word_result.appendChild(textarea);
}

//text
const word = document.querySelector('#word__transformation');

//doText
word.addEventListener('keyup', (e) => {
    let text = e.target.value;
    doUppercase(text);
    doLowercase(text);
    //doCamelcase(text);
    //doPascalcase(text);
    doSnakecase(text);
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
/*
//text camelcase
const camelcase = document.querySelector('#word__camelcase');
function doCamelcase(text) {
    return camelcase.value = text;
}

//text pascalcase
const pascalcase = document.querySelector('#word__pascalcase');
function doPascalcase(text) {
    return pascalcase.value = text;
}
*/
//text snakecase
const snakecase = document.querySelector('#word__snakecase');
function doSnakecase(text) {
    return snakecase.value = text.replaceAll(' ', '_');
}