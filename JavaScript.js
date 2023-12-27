// Работа выполнена студентом 3ИСИП-621 Еникеевым Евгением //

// №1 //
const inputField = document.getElementById('inputField');
const outputParagraph = document.getElementById('outputParagraph');
inputField.addEventListener('blur', function() {
    outputParagraph.textContent += inputField.value;
});

// №2 //
function calculateSum() {
    let num1 = parseFloat(document.getElementById('number1').value) || 0;
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let num3 = parseFloat(document.getElementById('number3').value) || 0;
    let sum = num1 + num2 + num3;
    document.getElementById('result').innerText = 'Сумма: ' + sum;
}

// №3
function calculateDigitSum() {
    const inputValue = document.getElementById('NumberInput').value;
    if (/^\d+$/.test(inputValue)) {
        const sum = inputValue.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        document.getElementById('digitSum').innerText = 'Сумма цифр: ' + sum;
    } else {
        alert('Пожалуйста, введите целое число.');
    }
}

// №4 //
function calculateAverage() {
    const inputValues = document.getElementById('numbersInput').value;
    const numbers = inputValues.split(',').map(Number);
    if (numbers.every(isFinite)) {
        const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
        document.getElementById('averageResult').innertExT = 'Среднее арифметическое: ' + average;
    } else {
        alert('Пожалуйста, введите числа через запятую.');
    }
}
// 5
function splitFullName() {
    let fullName = document.getElementById('fioInput').value;
    let parts = fullName.split(' ');
    document.getElementById('lastName').value = parts[0] || '';
    document.getElementById('firstName').value = parts[1] ||     '';
    document.getElementById('middleName').value = parts.slice(2).join(' ') || '';
  }

// 6
function capitalizeFullName() {
    let fullName = document.getElementById('FIOInput').value;
    let parts = fullName.split(' ');
    let capitalizedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    document.getElementById('FIOInput').value = capitalizedParts.join(' ');
}
  
// 7
function countWords() {
    const textInput = document.getElementById('textInput');
    const words = textInput.value.split(/\s+/).filter(word => word !== '');
    document.getElementById('wordCountResult').innerText = 'Количество слов: ' + words.length;
}

// 8
function formatDate() {
    const dateInput = document.getElementById('dateInput');
    const inputDate = dateInput.value;
    const parts = inputDate.split('.');
    if (parts.length === 3) {
      const formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];
      dateInput.value = formattedDate;
    } else {
      alert('Введите дату в формате 31.12.2016');
    }
}

// 9
function checkPalindrome() {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    const result = word === reversedWord ? 'Слово читается одинаково в обоих направлениях' : 'Слово не читается одинаково в обоих направлениях';
    document.getElementById('palindromeResult').innerText = result;
}

// 10
function checkNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = numberInput.value;
    const containsThree = /\d/.test(number) && number.includes('3');
    document.getElementById('numberCheckResult').innerText = containsThree ? 'Число содержит цифру 3' : 'Число не содержит цифру 3';
}

// 11
function addParagraphNumbers() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
      paragraph.innerText += ' (Номер ' + (index + 1) + ')';
    });
}

// 12
function addHrefInBrackets() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.innerText += ' (' + link.href + ')';
    });
}

// 13
function addArrowToHttpLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.href.startsWith('http://')) {
            link.innerText += '-->';
        }
    });
}

// 14
function squareNumbers() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        const number = parseFloat(paragraph.innerText);
        if (!isNaN(number)) {
            paragraph.innerText = Math.pow(number, 2);
        
        }
    });
}

// 15
function getDayOfWeek() {
    const dateInput = document.getElementById('dateInput');
    const inputDate = dateInput.value;
    const dateParts = inputDate.split('.');
    if (dateParts.length === 3) {
        const formattedDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const dayOfWeek = daysOfWeek[formattedDate.getDay()];
        document.getElementById('dayOfWeekResult').innerText = 'День недели: ' + dayOfWeek;
    } else {
        alert('Введите дату в формате 31.12.2016');
    }
}

// 16
const numberInput = document.getElementById('numberInput');
function increment() {
    numberInput.value = Math.max(parseInt(numberInput.value) + 1, 0);
}
function decrement() {
    numberInput.value = Math.max(parseInt(numberInput.value) - 1, 0);
}

// 17
const clickCountInput = document.getElementById('clickCountInput');
    let clickCount = 0;
    document.querySelectorAll('p').forEach(paragraph => {
        paragraph.addEventListener('click', () => {
            clickCount++;
            clickCountInput.value = 'Количество нажатий: ' + clickCount;
        });
    });

// 18
const randomStringInput = document.getElementById('randomStringInput');
function generateRandomString() {
    const randomString = Math.random().toString(36).substring(2, 10);
    randomStringInput.value = randomString;
}

// 19
function shuffleCharacters() {
    const inputString = document.getElementById('inputString');
    const originalString = inputString.value;
    const shuffledString = originalString.split('').sort(() => Math.random() - 0.5).join('');
    inputString.value = shuffledString;
}

// 20
function addStyles() {
    let myDiv = document.getElementById('myDiv');
    myDiv.style.width = '200px';
    myDiv.style.height = '200px';
    myDiv.style.border = '2px solid red';
}
// 21
function addFloatLeft() {
    let myList = document.getElementById('myList');
    let listItems = myList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.float = 'left';
    }
}
// 22
function applyStrikeThrough() {
    let myParagraph = document.getElementById('myParagraph');
    myParagraph.style.textDecoration = 'line-through';
}

function applyBold() {
    let myParagraph = document.getElementById('myParagraph');
    myParagraph.style.fontWeight = 'bold';
}

function applyRedColor() {
    let myParagraph = document.getElementById('myParagraph');
    myParagraph.style.color = 'red';
}

// 23
let elem = document.getElementById('elem');
elem.innerText = 'Привет, мир!';

// 24
let listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'red';
}

// 25
let elements = document.getElementsByClassName('www');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'red';
}

// 26
let parent = document.querySelector('#parent');
let elems1 = parent.getElementsByClassName('www');
let elems2 = parent.getElementsByClassName('ggg');
console.log('Элементы с www:', elems1);
console.log('Элементы с ggg:', elems2);

// 27
let hello = document.getElementById('hello');
let lastChild = parent.lastChild;
let lastElementChild = parent.lastElementChild;
console.log('lastChild:', lastChild);
console.log('lastElementChild:', lastElementChild);

// 28
let secondElement = document.querySelector('#Parent span');
let nextSibling = secondElement.nextSibling;
let nextElementSibling = secondElement.nextElementSibling;
console.log('nextSibling:', nextSibling);
console.log('nextElementSibling:', nextElementSibling);

// 29
let elem = document.getElementById('elem');
for (let node of elem.childNodes) {
    console.log(node);
}

// 30
let elem = document.getElementById('elem');
for (let node of elem.childNodes) {
    console.log(node.nodeName);
}

// 31
let elem = document.getElementById('elem');
for (let node of elem.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node);
    }
}

// 32
function checkCheckbox() {
    let myCheckbox = document.getElementById('myCheckbox');
    myCheckbox.checked = true;
}
function uncheckCheckbox() {
    let myCheckbox = document.getElementById('myCheckbox');
    myCheckbox.checked = false;
}

// 33
function updateText() {
    let myCheckbox = document.getElementById('myCheckbox');
    let myParagraph = document.getElementById('myParagraph');
    if (myCheckbox.checked) {
        myParagraph.textContent = 'Привет';
    } else {
        myParagraph.textContent = 'Пока';
    }
}

// 34
function toggleCheckbox() {
    let myCheckbox = document.getElementById('myCheckbox');
    myCheckbox.checked = !myCheckbox.checked;
}

// 35
function displaySelectedValue() {
    let radioButtons = document.getElementsByName('radioGroup');
    let resultParagraph = document.getElementById('resultParagraph');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            resultParagraph.textContent = 'Выбрано: ' + radioButton.value;
            return; 
        }
    }
    resultParagraph.textContent = 'Ничего не выбрано';
}

// 36
function checkTextLength() {
    let textInput = document.getElementById('textInput');
    if (textInput.value.length >= 5) {
        alert('Длина текста достигла 5 символов!');
    }
}

// 37
function checkTextLength() {
    let textInput = document.getElementById('textInput');
    let messageParagraph = document.getElementById('messageParagraph');
    let maxLength = 5;
    let currentLength = textInput.value.length;
    let remainingCharacters = maxLength - currentLength;
    if (remainingCharacters >= 0) {
        messageParagraph.textContent = `Осталось ввести ${remainingCharacters} символов`;
    } else {
        messageParagraph.textContent = `Превышение на ${Math.abs(remainingCharacters)} символов`;
    }
}

// 38
function checkInputLength(input, nextInputId) {
    let maxLength = 2;
    if (input.value.length === maxLength) {
        if (nextInputId) {
            document.getElementById(nextInputId).focus();
        } else {
            input.blur();
        }
    }
}

// 39
function displaySelectedText() {
    let mySelect = document.getElementById('mySelect');
    let resultParagraph = document.getElementById('resultParagraph');
    let selectedOption = mySelect.options[mySelect.selectedIndex];
    resultParagraph.textContent = `Выбрано: ${selectedOption.textContent}`;
}

// 40
function checkLeapYear() {
    let yearSelect = document.getElementById('yearSelect');
    let resultParagraph = document.getElementById('resultParagraph');
    let selectedYear = parseInt(yearSelect.value);
    if ((selectedYear % 4 === 0 && selectedYear % 100 !== 0) || selectedYear % 400 === 0) {
        resultParagraph.textContent = `${selectedYear} - Високосный год`;
    } else {
        resultParagraph.textContent = `${selectedYear} - Не високосный год`;
    }
}

// 41
function checkDayType() {
    let dayOfWeekSelect = document.getElementById('dayOfWeekSelect');
    let resultParagraph = document.getElementById('resultParagraph');
    let selectedDay = parseInt(dayOfWeekSelect.value);
    if (selectedDay >= 1 && selectedDay <= 5) {
        resultParagraph.textContent = `День ${selectedDay} - рабочий`;
    } else if (selectedDay >= 6 && selectedDay <= 7) {
        resultParagraph.textContent = `День ${selectedDay} - выходной`;
    } else {
        resultParagraph.textContent = 'Выберите день недели';
    }
}

// 42
function displaySelectedMonth() {
    let monthSelect = document.getElementById('monthSelect');
    let resultParagraph = document.getElementById('resultParagraph');
    let currentMonth = new Date().getMonth() + 1;
    monthSelect.value = currentMonth;
    resultParagraph.textContent = `Нынешний месяц: ${monthSelect.options[monthSelect.selectedIndex].text}`;
}

// 43
function highlightSelectedOption() {
    let numberInput = document.getElementById('numberInput');
    let mySelect = document.getElementById('mySelect');
    let inputValue = numberInput.value;
    for (let i = 0; i < mySelect.options.length; i++) {
        if (mySelect.options[i].value === inputValue) {
            mySelect.options[i].selected = true;
            break;
        }
    }
}

// 44
document.addEventListener('DOMContentLoaded', function () {
    let dayOfWeekSelect = document.getElementById('dayOfWeekSelect');
    let currentDay = new Date().getDay();
    dayOfWeekSelect.value = currentDay;
});

// 45
document.addEventListener('DOMContentLoaded', function () {
    let mySelect = document.getElementById('mySelect');
    for (let i = 0; i < mySelect.options.length; i++) {
        mySelect.options[i].textContent += ` ${mySelect.options[i].value}`;
    }
});

// 46
document.addEventListener('DOMContentLoaded', function () {
    let mySelect = document.getElementById('mySelect');
    for (let i = 0; i < mySelect.options.length; i++) {
        if (mySelect.options[i].selected) {
            mySelect.options[i].textContent += '!';
        } else {
            mySelect.options[i].textContent += '?';
        }
    }
});

// 47
function selectLastOption() {
    let mySelect = document.getElementById('mySelect');
    mySelect.options[mySelect.options.length - 1].selected = true;
}

// 48
let MyInput = document.getElementById('myInput');
MyInput.addEventListener('keydown', function (event) {
    alert(`Клавиша: ${event.key}\nКод клавиши: ${event.code}`);
});

// 49
let myinput = document.getElementById('myInput');
myinput.addEventListener('keydown', function (event) {
    console.log(`Клавиша: ${event.key}\nКод клавиши: ${event.code}`);
});

// 50
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log(`Код клавиши Enter: ${event.code}`);
    }
});

// 51
document.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        console.log(`Код клавиши BackSpace: ${event.code}`);
    }
});

// 52
let textInput = document.getElementById('textInput');
let paragraph = document.getElementById('paragraph');
textInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        paragraph.textContent = textInput.value;
        textInput.value = '';
        event.preventDefault();
    }
});

// 53
let elem = document.getElementById('elem');
elem.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        event.target.textContent += '1';
    }
    if (event.shiftKey) {
        event.target.textContent += '2';
    }
});

// 54
let links = document.querySelectorAll('.link');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        link.textContent += ' ' + link.getAttribute('href');
    });
});

// 55
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let resultParagraph = document.getElementById('resultParagraph');
let calculateLink = document.getElementById('calculateLink');
calculateLink.addEventListener('click', function() {
    let num1 = parseFloat(input1.value) || 0;
    let num2 = parseFloat(input2.value) || 0;
    resultParagraph.textContent = `Сумма: ${num1 + num2}`;
});

// 56
let outer = document.getElementById('outer');
let middle = document.getElementById('middle');
let inner = document.getElementById('inner');
let myButton = document.getElementById('myButton');
outer.addEventListener('click', logEvent);
middle.addEventListener('click', logEvent);
inner.addEventListener('click', logEvent);
myButton.addEventListener('click', logEvent);
function logEvent(event) {
    console.log(`Тип события: ${event.type}, Целевой элемент: ${event.target.id}`);
}

// 57
let myInput = document.getElementById('myInput');
myInput.addEventListener('focus', function (event) {
    console.log('Событие focus сработало на элементе с id:', event.target.id);
});
myInput.addEventListener('blur', function (event) {
    console.log('Событие blur сработало на элементе с id:', event.target.id);
});

// 58
let elem = document.getElementById('elem');
elem.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    }
    if (event.target.tagName === 'UL') {
        console.log('Кликнули на ul');
    }
});

// 59
let parents = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    let p = document.createElement('p');
    p.textContent = elem;
    p.addEventListener('click', function () {
        let currentValue = parseInt(p.textContent, 10) || 0;
        p.textContent = currentValue + 1;
    });
    parents.appendChild(p);
}

// 60
let myTable = document.getElementById('myTable');
for (let i = 1; i <= 5; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 5; j++) {
        let cell = document.createElement('td');
        cell.textContent = `Row ${i}, Col ${j}`;
        row.appendChild(cell);
    }
    myTable.appendChild(row);
}

// 61
let MyTable = document.getElementById('myTable');
for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 5; j++) {
        let cell = document.createElement('td');
        cell.textContent = 'x';
        row.appendChild(cell);
    }
    MyTable.appendChild(row);
}

// 62
let widthInput = document.getElementById('widthInput');
let heightInput = document.getElementById('heightInput');
let generateTableBtn = document.getElementById('generateTableBtn');
let mytable = document.getElementById('myTable');
generateTableBtn.addEventListener('click', function () {
    mytable.innerHTML = '';
    let width = parseInt(widthInput.value) || 1;
    let height = parseInt(heightInput.value) || 1;
    for (let i = 1; i <= height; i++) {
        let row = document.createElement('tr');
        for (let j = 1; j <= width; j++) {
            let cell = document.createElement('td');
            cell.textContent = `Row ${i}, Col ${j}`;
            row.appendChild(cell);
        }
        mytable.appendChild(row);
    }
});


