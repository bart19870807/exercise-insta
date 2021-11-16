// const PwEl = document.getElementById('pw');
// const copyEL = document.getElementById('copy');
// const lenEL = document.getElementById('len');
// const upperEL = document.getElementById('upper');
// const lowerEL = document.getElementById('lower');
// const symbolEL = document.getElementById('symbol');
// const generateEL = document.getElementById('generate');
// const numberEL = document.getElementById('number');

// const upperLetters = 'ABCDEFGHIJKLMNOPRSTUWXYZ';
// const lowerLetters = 'abcdefghijklmnoprstuwxyz';
// const number = "0123456789";
// const symbol = '!@#$%^&*()_+=|?:;,.'

// function getLowercase() {
//     return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
// }

// function getUppercase() {
//     return upperLetters[Math.floor(Math.random() * upperLetters.length)];
// }

// function getNumber() {
//     return number[Math.floor(Math.random() * number.length)];
// }

// function getSymbol() {
//     return symbol[Math.floor(Math.random() * symbol.length)];
// }

// function generatePassword() {
//     const len = lenEL.nodeValue;
//     let password = '';
//     for(let i = 0; i < len; i++) {
//         const x = generateX();
//         password += x;
//     }
//     PwEl.innerText = password;
// }

// function generateX() {
//     const xs = [];
//     if(upperEL.checked) {
//         xs.push(getUppercase());
//     }
//     if(lowerEL.checked) {
//         xs.push(getLowercase());
//     }
//     if(numberEL.checked) {
//         xs.push(getNumber());
//     }
//     if(symbolEL.checked) {
//         xs.push(getSymbol());
//     }
//     if(xs.length === 0)return "";
//     return xs[Math.floor(Math.random() * xs.length)];
// }

// generateEL.addEventListener('click', generatePassword);
// copyEL.addEventListener('click', () => {
//     const textarea = document.createElement('textarea');
//     const password = PwEl.innerText;
//     if(!password) {
//         return;
//     }
//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     textarea.remove();
//     alert('password copy to clipboard'); 
// })
function timeLeft(endtime){
    let t = Data.perse(endtime)-Data.perse(new Date());
    let seconds = Math.floor((t/1000) % 60);
    let minutes = Math.floor((t/1000/60) % 60);
    let hours = Math.floor((t/(1000*60*60)) % 24);
    let days = Math.floor(t/(1000*60*60*24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};
$(document).ready(function() {
    let today = new Date();
    let deadline = 'January 1' + (today.getFullYear() + 1) + "00:00:00";
    if (today.getMonth() == 0 && today.getDate() == 1){
        deadline = 'January 1' + (today.getFullYear()) + '00:00:00';
    };
    $("#header").hover(function(){
        $(this).toggleClass('bluelight');
    });
    $('.clock').hover(function(){
        $(this).toggleClass('bluelight');
    });
})