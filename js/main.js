let elSearchModal = document.getElementById('searchModal');
let elCloseModal = document.getElementById('closeModal');
let elModalBox = document.getElementById('modalBox');

elSearchModal.addEventListener('click', function() {
    elModalBox.classList.add('show-it');
})

elCloseModal.addEventListener('click', function() {
    elModalBox.classList.remove('show-it');
})