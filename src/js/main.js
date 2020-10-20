'use strict'

let actualCoders = ['Alejandra', 'Alvaro', 'Carmen', 'Stefanie', 'Gabriel', 'Giacomo', 'Giselle', 'Jackson', 'Jorge', 'Jose', 'Isma', 'Laura R', 'Laura R', 'Loredana', 'Lorena', 'Lucas', 'MaxPower', 'Mercedes', 'Moises', 'Olga', 'Quim', 'R', 'Sergio', 'Vanessa'];

const nodeSection = document.createElement('section');
mainContent.appendChild(nodeSection).setAttribute('id', 'namesSection');
const namesSectionId = document.querySelector('#namesSection');
const nodeUl = document.createElement('ul');
namesSectionId.appendChild(nodeUl).setAttribute('id', 'namesList');
const nodeColumns = document.querySelector('#namesList');

function coderList(count = 0) {
    for(let i = count; i < actualCoders.length; i++) {
        const nodeLi = document.createElement('li');
        nodeColumns.appendChild(nodeLi).setAttribute('id', `coder${[i]}`);
        
        const coderId = document.querySelector(`#coder${[i]}`);
        const nodeText = document.createTextNode(`${actualCoders[i]}`);
        coderId.appendChild(nodeText);
    }
}

function killEm() {
    let selection = Math.floor(Math.random() * actualCoders.length);
    let loser = actualCoders[selection];
    
    const resultId = document.querySelector('#result');
    resultId.textContent = loser;
    console.log(selection);
}

function addCoder() {
    let newCoder = document.querySelector('#addCoder').value;
    let oldList = actualCoders.slice();
    actualCoders.push(newCoder);
    
    if(oldList.length < actualCoders.length) {
        coderList(oldList.length);
    }
}

function substractList() {
    
}

function substractCoder() {
    const index = array.indexOf(indexValue);
    if (index > -1) {
    array.splice(index, 1);
}
}

coderList();

const btnListener = document.querySelector('#btnKill');
btnListener.addEventListener('click', killEm);

const btnAddCoder = document.querySelector('#btnAddCoder');
btnAddCoder.addEventListener('click', addCoder);