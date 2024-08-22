window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const value = bar.style.width;
        bar.style.width = value;
    });
});
