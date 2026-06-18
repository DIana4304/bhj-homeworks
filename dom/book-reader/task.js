let linkFontSize = document.querySelectorAll('.font-size');
let linkTextColor = document.querySelectorAll('.book__control_color .color');
let linkBgColor = document.querySelectorAll('.book__control_background .color');
let bookContent = document.querySelector('.book__content');

linkFontSize.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        linkFontSize.forEach(l => {
            l.classList.remove('font-size_active');
        });
        link.classList.toggle('font-size_active');

        if (link.dataset.size == 'small') {
            bookContent.classList.add('font-size_small');
            bookContent.classList.remove('font-size_big');
        } else {
            bookContent.classList.remove('font-size_big');
            bookContent.classList.remove('font-size_small');
        }

        if (link.dataset.size == 'big') {
            bookContent.classList.add('font-size_big');
            bookContent.classList.remove('font-size_small');
        }
    })
});

linkTextColor.forEach(elem => {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        linkTextColor.forEach(l => {
            l.classList.remove('color_active');
        });
        elem.classList.toggle('color_active');

        if (elem.dataset.textColor == 'whitesmoke') {
            linkTextColor.forEach(function() {
                bookContent.classList.remove('book_color-black', 'book_color-gray');
            });
            bookContent.classList.toggle('book_color-whitesmoke');
        }

        if (elem.dataset.textColor == 'black') {
            linkTextColor.forEach(function() {
                bookContent.classList.remove('book_color-whitesmoke', 'book_color-gray');
            });
            bookContent.classList.toggle('book_color-black');
        }

        if (elem.dataset.textColor == 'gray') {
            linkTextColor.forEach(function() {
                bookContent.classList.remove('book_color-black', 'book_color-whitesmoke');  
            });
            bookContent.classList.toggle('book_color-gray');
        }
    })
});

linkBgColor.forEach(elem => {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        linkBgColor.forEach(l => {
            l.classList.remove('color_active');
        });
        elem.classList.toggle('color_active');

        if (elem.dataset.bgColor == 'white') {
            linkBgColor.forEach(function() {
                bookContent.classList.remove('bg_color_black', 'bg_color_gray');
            });
            bookContent.classList.toggle('bg_color_white');
        }

        if (elem.dataset.bgColor == 'black') {
            linkBgColor.forEach(function() {
                bookContent.classList.remove('bg_color_white', 'bg_color_gray');
            });
            bookContent.classList.toggle('bg_color_black');
        }

        if (elem.dataset.bgColor == 'gray') {
            linkBgColor.forEach(function() {
                bookContent.classList.remove('bg_color_black', 'bg_color_white');
            });
            bookContent.classList.toggle('bg_color_gray');
        }
    })
});



