'use strict';

const mdodal=document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay     = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModalWindow = ()=>{
    mdodal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModalWindow = ()=>{
    mdodal.classList.add('hidden');
    overlay.classList.add('hidden');
}
console.log(btnOpenModal);
for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',openModalWindow);

}
btnCloseModal.addEventListener('click',closeModalWindow);
overlay.addEventListener('click',closeModalWindow);

document.addEventListener('keydown',(e)=>{
    if(e.key=== 'Escape' && !mdodal.classList.contains('hidden')){
        closeModalWindow();  
        console.log(e.key); 
    }
})
