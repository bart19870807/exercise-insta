'use strict'
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

//// RECORDER


// let btn = document.querySelector('.record-btn')
// btn.addEventListener('click', async function() {
//     let stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true
//     })
//     const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
//         ? "video/webm; codecs=vp9"
//         : "video/webm"
//     let mediaRecorder = new MediaRecorder(stream, {
//         mimeType: mime
//     })
//     let chunks = []
//     mediaRecorder.addEventListener('dataavailable', function(e){
//         chunks.push(e.data)
//     })
//     mediaRecorder.addEventListener('stop', function(){
//         let blob = new Blob(chunks, {
//             type: chunks[0].type
//         })
//         let url = URL.createObjectURL(blob)
//         let video = document.querySelector('video')
//         video.src = url
//         let a = document.createElement('a')
//         a.href = url
//         a.download = 'video.webm'
//         a.click()
//     })
//     mediaRecorder.start()
// })

// ACCordion
// const accordion = document.getElementsByClassName('container');
// for (i=0; i<accordion.length; i++){
//     accordion[i].addEventListener('click', function() {
//         this.classList.toggle('active')
//     })
// }

const body = document.body;
const bgColorBody = ['#ffb457', '#ff96bd', '#9999fb', '#ffe797', '#cffff1'];
const menu = body.querySelector('.menu');
const menuItem = menu.querySelectorAll('.menu_item');
const menuBorder = menu.querySelector('.menu_border');
let activeItem = menu.querySelector('.active');

function clickItem(item, index) {
    menu.style.removeProperty('--timeOut');
    if (activeItem == item) return;
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    item.classList.add('active');
    body.style.backgroundColor = bgColorBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
}