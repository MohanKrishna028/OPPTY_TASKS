const track = document.getElementById("sliderTrack");
    const cards = document.querySelectorAll(".slider-card");
    const playPauseBtn = document.getElementById("playPauseBtn");

    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth + 20; // include gap
    let autoPlayInterval;
    let isPlaying = true;

    /* MOVE SLIDER */
    function moveSlider() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    /* NEXT / PREVIOUS */
    function slide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }

        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        moveSlider();
    }

    /* AUTOPLAY */
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            slide(1);
        }, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    /* PLAY / PAUSE BUTTON */
    function togglePlay() {
        if (isPlaying) {
            stopAutoPlay();
            playPauseBtn.innerHTML = "▶";
        } else {
            startAutoPlay();
            playPauseBtn.innerHTML = "⏸";
        }
        isPlaying = !isPlaying;
    }

    /* START AUTOPLAY ON LOAD */
    window.onload = () => {
        startAutoPlay();
    };

    /* UPDATE ON RESIZE */
    window.addEventListener("resize", () => {
        cardWidth = cards[0].offsetWidth + 20;
        moveSlider();
    });