$(document).ready(function () {
    // Initialize the Bootstrap carousel with custom options
    $('.carousel').carousel({
        interval: 2000,  // You can modify the interval for changing slides (in milliseconds)
        pause: 'hover',  // Change the pause behavior on hover (e.g., 'hover' or false)
        wrap: true,      // Set to false to disable wrapping of slides
        keyboard: true,  // Enable or disable keyboard navigation for the carousel
    });

    // Add a scroll event listener to the window
    $(window).scroll(function () {
        // When the user scrolls down more than 40 pixels, show the "Back to Top" button
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            // When the user is near the top of the page, hide the button
            $('#topBtn').fadeOut();
        }
    });

    // Add a click event to the "Back to Top" button
    $('#topBtn').click(function () {
        // When the button is clicked, scroll back to the top of the page with a smooth animation
        $('html, body').animate({ scrollTop: 0 }, 800); // You can modify the scrolling speed (in milliseconds)
    });
});
