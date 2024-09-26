function setUpFlipbook() {
    let currentPage = 0;
    const pages = document.querySelectorAll('.flipbook-page');
    const totalPages = pages.length;

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
        }
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 0) {
            pages[currentPage - 1].classList.remove('flipped');
            currentPage--;
        }
    });
}

setUpFlipbook();
