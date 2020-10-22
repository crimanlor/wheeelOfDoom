'use strict'

///////CREATE CODERLIST///////

let actualCoders = ['alejandra', 'alvaro', 'carmen', 'stefanie', 'gabriel', 'giacomo', 'giselle', 'jackson', 'jorge', 'jose', 'isma', 'laura r', 'laura R', 'loredana', 'lorena', 'lucas', 'maxpower', 'mercedes', 'moises', 'olga', 'quim', 'r', 'sergio', 'vanessa'];

const    nodeSection = document.createElement('section');
mainContent.appendChild(nodeSection).setAttribute('id', 'namesSection');
const namesSectionId = document.querySelector('#namesSection');
const nodeUl = document.createElement('ul');
namesSectionId.appendChild(nodeUl).setAttribute('id', 'namesList');
const nodeColumns = document.querySelector('#namesList');

///////FUNCTIONS///////

function coderList(count = 0) {
    for (let i = count; i < actualCoders.length; i++) {
        const nodeLi = document.createElement('li');
        nodeColumns.appendChild(nodeLi).setAttribute('id', `coder${[i]}`);

        const coderId = document.querySelector(`#coder${[i]}`);
        const nodeText = document.createTextNode(`${actualCoders[i]}`);
        coderId.appendChild(nodeText);
    }
}

coderList();

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

    if (oldList.length < actualCoders.length) {
        coderList(oldList.length);
    }
}

function substractList() {
let coderToDelete;
let nameCoderToDelete = document.querySelector('#addCoder').value;
    for (let i=0; i < actualCoders.length; i++){
        if (actualCoders[i] == nameCoderToDelete) {
            coderToDelete = actualCoders.indexOf(actualCoders[i]);
            actualCoders.splice(coderToDelete,1);
        }
    }
document.querySelector('#namesList').innerHTML = "";
coderList();
}

///////CALL TO ACTION///////

const btnListener = document.querySelector('#btnKill');
btnListener.addEventListener('click', killEm);

const btnAddCoder = document.querySelector('#btnAddCoder');
btnAddCoder.addEventListener('click', addCoder);

const btnSubstractCoder = document.querySelector('#btnSubstractCoder');
btnSubstractCoder.addEventListener('click', substractList);


