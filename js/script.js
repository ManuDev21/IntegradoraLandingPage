$(document).ready(function() {

    const words = ["Reciclaje.", "Intercambio.", "Planeta."];
    let i = 0;
    let timer;

    function typeWriter() {
        const textElement = document.getElementById("typing-text");
        const currentWord = words[i];
        
        $(textElement).text(currentWord).css('opacity', 0).animate({opacity: 1}, 500);

        i = (i + 1) % words.length;
        setTimeout(typeWriter, 2500); 
    }
    typeWriter();

    // 2. Navbar Dinámico
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // 3. Smooth Scrolling para enlaces del menú
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70 
            }, 800); // Velocidad suavizada
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(el => observer.observe(el));

});