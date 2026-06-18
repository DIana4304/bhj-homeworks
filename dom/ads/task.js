'use strict';

const listOfRotatorCases = Array.from(document.querySelectorAll('span.rotator__case'));
const listOfRotatorCasesLength = listOfRotatorCases.length;

function isActiveRotator(element, index, array) {
    return element.classList.contains('rotator__case_active');
};

function setNewRotatorIndex(currentRotator) {
    return (currentRotator === listOfRotatorCasesLength - 1) ? 0 : ++currentRotator;
}

function rotatorClassChange(rotator) {
    rotator.classList.toggle('rotator__case_active');
}

function newSetInterval(speed) {
    let rotatorNewSetInterval = setInterval(function () {
        // activate new rotator
        let currentRotator = listOfRotatorCases.findIndex(isActiveRotator);
        let newRotator = setNewRotatorIndex(currentRotator);
        rotatorClassChange(listOfRotatorCases[currentRotator]);
        rotatorClassChange(listOfRotatorCases[newRotator]);

        // change color for span
        listOfRotatorCases[newRotator].style.color = listOfRotatorCases[newRotator].dataset.color;

        // cancel current setInterval and start new one for next rotator (with speed for next rotator)
        clearInterval(rotatorNewSetInterval);
        newSetInterval(listOfRotatorCases[setNewRotatorIndex(newRotator)].dataset.speed);
    }, speed)
}

// first start with initial speed and color for current rotator
listOfRotatorCases[listOfRotatorCases.findIndex(isActiveRotator)].style.color = listOfRotatorCases[listOfRotatorCases.findIndex(isActiveRotator)].dataset.color;
newSetInterval(document.querySelector('span.rotator__case_active').dataset.speed);