let clickerCounter = document.querySelector('#clicker__counter');
let clickerCookie = document.querySelector('.clicker__cookie');


function cluckerImg() {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    clickerCookie.width = 250;
}

function cluckerMinImg() {
    clickerCookie.width = 200;
}



clickerCookie.addEventListener('click', cluckerImg);
clickerCookie.addEventListener('mouseout', cluckerMinImg);

