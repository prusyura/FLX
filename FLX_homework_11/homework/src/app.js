let rootNode = document.getElementById('root');
// Your code goes here
let header = document.createElement('header');
rootNode.appendChild(header);

let main = document.createElement('main');
rootNode.appendChild(main);

let footer = document.createElement('footer');
rootNode.appendChild(footer);

let h1 = document.createElement('h1');
h1.innerHTML = 'TODO Cat List';
header.appendChild(h1);

let div = document.createElement('div');
div.className = 'form'
header.appendChild(div);

let inputHeader = document.createElement('input');
inputHeader.className = 'text'
inputHeader.setAttribute('type', 'input');
inputHeader.setAttribute('placeholder', 'Add New Action');
div.appendChild(inputHeader);

let count = 0;
let maxCount = 9;
let buttonHeader = document.createElement('div');
buttonHeader.setAttribute('type', 'button');
buttonHeader.onclick=function(){
    addAction(inputHeader.value.trim());
    inputHeader.value = '';
    count++;
}
function addAction () {
    let li = document.createElement('li');
    li.className = 'list-item';
    li.setAttribute('draggable', true);
    main.appendChild(li);

    let checkIcon = document.createElement('i');
    let checkBox = document.createTextNode('check_box_outline_blank');
    checkIcon.className = 'material-icons md-48 check-icon';
    checkIcon.appendChild(checkBox);
    checkIcon.onclick = function () {
        checkIcon.textContent = 'check_box';
    }
    li.appendChild(checkIcon);

    let liText = document.createElement('p');
    let liTextAction = document.createTextNode(inputHeader.value);
    liText.appendChild(liTextAction);
    liText.className = 'text-style';
    li.appendChild(liText);

    let deleteIcon = document.createElement('i');
    let deleteBox = document.createTextNode('delete');
    deleteIcon.className = 'material-icons md-48 delete';
    deleteIcon.appendChild(deleteBox);
    deleteIcon.onclick = function () {
        li.remove();
        count--;
        document.querySelector('.material-icons').disabled = false;
        document.querySelector('.material-icons').style.display= 'block';
        document.querySelector('.text').disabled = false;
        document.querySelector('.text').style.display= 'block';
        errorText.style.display = 'none';
    }
    li.appendChild(deleteIcon);

    if (count === maxCount){
        document.querySelector('.material-icons').disabled = true;
        document.querySelector('.material-icons').style.display= 'none';
        document.querySelector('.text').disabled = true;
        document.querySelector('.text').style.display= 'none';
        errorText.style.display = 'block';
    }
}

div.appendChild(buttonHeader);
let buttonIcon = document.createElement('i');
let buttonIconAdd = document.createTextNode('add_box');
buttonIcon.className = 'material-icons md-48';
buttonIcon.appendChild(buttonIconAdd);
buttonHeader.className = 'add';
buttonHeader.appendChild(buttonIcon);

let errorText = document.createElement('h2');
errorText.className = 'error';
errorText.innerHTML = 'Maximum item per list are created';
errorText.style.display = 'none';
header.appendChild(errorText);

let img = document.createElement('img');
img.setAttribute('src', 'assets/img/cat.png');
img.setAttribute('width', '140');
img.setAttribute('height', '140');
footer.appendChild(img);


