$(document).ready(function () {
    let isOpen = false; // Track state

    $('.container').hover(
        function () {
            if (!isOpen) {
                $('.card').stop().animate({ top: '-90px' }, 'slow');
            }
        },
        function () {
            if (!isOpen) {
                $('.card').stop().animate({ top: '0px' }, 'slow');
            }
        }
    );

    $('.card').click(function (event) {
        event.stopPropagation();

        if (!isOpen) {
            isOpen = true; // Prevents card from moving back
            $('.overlay').css("display", "flex").hide().fadeIn(300);
            $('.love-letter').fadeIn(300);
        }
    });

    $('.overlay').click(function () {
        $('.love-letter').fadeOut(300, function () {
            $('.overlay').fadeOut(300, function () {
                isOpen = false; // Reset after overlay is hidden
                $('.card').stop().animate({ top: '0px' }, 'slow'); // Move card back
            });
        });
    });
});     


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const letter = document.getElementById("card"); // The letter element

    if (!audio || !letter) {
        console.error("Audio or card element not found!");
        return;
    }

    function playAudio(event) {
        // Check if the click is on the card
        if (letter.contains(event.target)) {
            audio.play().then(() => {
                console.log("Audio is playing.");
                document.body.removeEventListener("click", playAudio); // Remove listener after playing
            }).catch(error => {
                console.log("Autoplay blocked. Waiting for user interaction.");
            });
        }
    }

    // Attach event listener to card instead of the whole body
    letter.addEventListener("click", playAudio);
});

