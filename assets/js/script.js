window.onload = () => {
    // La premiere question - Ancre en JS
    let arrow = document.getElementsByClassName('arrow');
    arrow[0].addEventListener('click', () => {
        window.scrollTo(top, 'smooth');
    });
    arrow[1].addEventListener('click', () => {
        window.scrollBy(0, window.innerHeight);
    });

    
}