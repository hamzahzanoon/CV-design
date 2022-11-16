let list = document.querySelectorAll('.navigation li');

function activeLisk(e) {
    e.preventDefault();
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');  
} 

list.forEach((item) => 
item.addEventListener('click', activeLisk)) 