const readMore = document.getElementsByClassName('blog-text');

for (i=0; i<readMore.length; i++){
    readMore[1].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}