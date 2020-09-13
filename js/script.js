// Autohide Navbar upon item selection
var navbarToggler = $('.navbar-toggler');
$('.navbar-nav a').on('touchstart', function() {
    navbarToggler.click();
});