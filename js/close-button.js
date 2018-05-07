document.getElementById('close-thank-dialog').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
});

document.getElementById('close-error-dialog').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
});