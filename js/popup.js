$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-scroll');
});
$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
});
$('#close-popup').click(function() {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup__table').click(function(e) {
    e.preventDefault();
    $('.popup-table').fadeIn(600);
    $('html').addClass('no-scroll');
    
    
});
$('.close-popup__table').click(function() {
    $('.popup-table').fadeOut(600);
    $('html').removeClass('no-scroll');
});

