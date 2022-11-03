const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalOpen = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showByTickets() {
    modalOpen.classList.add('open')
}

function hiddenModal() {
    modalOpen.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showByTickets)
}

modalClose.addEventListener('click', hiddenModal)
modalOpen.addEventListener('click', hiddenModal)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

/* Đóng mở menu mobile */
var headerElement = document.getElementById('header');

var mobileMenu = document.getElementById('mobile-menu');

var headerHight = header.clientHeight;
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHight;
    if (isClose) {
        headerElement.style.height = 'auto';
    } else {
        headerElement.style.height = null;
    }
}

/* Tự động đóng khi chon menu */
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        /* Từ khoá this để chỉ chính thằng mình click */
        var isParentMenu = this.nextElementSibling &&
            this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null
        }
    }
}
