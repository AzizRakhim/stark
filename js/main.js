let elSearchModal = document.getElementById('searchModal');
let elCloseModal = document.getElementById('closeModal');
let elModalBox = document.getElementById('modalBox');
let elUserBtn = document.getElementById('userBtn');
let elUserModal = document.getElementById('userModal');
let elUserClose = document.getElementById('userClose');
let elUpwardBtn = document.getElementById('upwardBtn');
let elUpwardInfoModal = document.getElementById('upwardInfoModal');
let elMinusBtn = document.getElementById('minusBtn');

elSearchModal.addEventListener('click', function() {
    elModalBox.classList.add('show-it');
})

elCloseModal.addEventListener('click', function() {
    elModalBox.classList.remove('show-it');
})

elUserBtn.addEventListener('click', function() {
    elUserModal.classList.add('show-it-bitch');
})

elUserClose.addEventListener('click', function() {
    elUserModal.classList.remove('show-it-bitch');
})

elUpwardBtn.addEventListener('click', function() {
    elUpwardInfoModal.classList.add('dick');
})

elMinusBtn.addEventListener('click', function() {
    elUpwardInfoModal.classList.remove('dick');
})