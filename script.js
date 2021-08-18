const cards = document.querySelectorAll(".card");
const dropzone = document.querySelectorAll(".dropzone");
function l(l) {
    console.log(l);
}

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    //l('start');
    dropzone.forEach(d => d.classList.add('hightlight'));

    this.classList.add('is-dragging');
}

function drag(){
  ///  l('test');
}

function dragend() {
   // l('end');
   dropzone.forEach(d => d.classList.remove('hightlight'));
   this.classList.remove('is-dragging');
}

dropzone.forEach(element => {
    element.addEventListener('dragenter', dragenter);
    element.addEventListener('dragover', dragover);
    element.addEventListener('dragleave', dragleave);
    element.addEventListener('drop', drop);
});

function dragenter() {
    //l('end');
}

function dragover() {
    //l('end');
    this.classList.add('over');
    const cardMove = document.querySelector('.is-dragging');
    this.appendChild(cardMove);
}

function dragleave() {
    //l('end');
    this.classList.remove('over');
}

function drop() {
    //l('end');
}
