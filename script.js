let props = document.querySelector('.modal');
let mainBody = document.querySelector('.main_body');

function modalopen() {
    console.log(props);
    props.classList.add('modal_open');
    mainBody.style.backgroundColor = '#5f5f5f83';
    mainBody.classList.add('bg_color');
}

function closeModal() {
    props.classList.remove('modal_open');
    mainBody.classList.remove('bg_color');
    mainBody.style.backgroundColor = 'black';
}
