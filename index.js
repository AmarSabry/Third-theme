
/**********      SCROLL UP BUTTON **********/
$(window).scroll(() => {
    if ($(window).scrollTop() > 800) {
        $('#up').fadeIn(300);
        $('#up').on('click', () => {
            $(window).scrollTop(0);
        });
    }else{
$('#up').fadeOut(300);
    }
});

/**********      COUNTER    **********/

$(window).scroll(() => {
    if ($(window).scrollTop() >= $('.buy').offset().top - 400) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});



/*************     SLIDE UP PARAGRAPHS    ************ */

$('.BusinessBlock').mouseenter(() => { $('.BusinessBlock p').slideDown(800); }).mouseleave(() => { $('.BusinessBlock p').slideUp(500) });
$('.literature').mouseenter(() => { $('.literature p').slideDown(800); }).mouseleave(() => { $('.literature p').slideUp(500) });
$('.science').mouseenter(() => { $('.science p').slideDown(500); }).mouseleave(() => { $('.science p').slideUp(500) });
$('.math').mouseenter(() => { $('.math p').slideDown(500); }).mouseleave(() => { $('.math p').slideUp(500) });


/*********   Check mark hover   ********/

$('.check').mouseenter((e) => {
    $(e.target).children('.far').css({
        'font-weight': 'bold',
        'color': 'green'
    });
});
$('.check').mouseleave((event) => {
    $(event.target).children('.far').css({
        'font-weight': 'normal',
        'color': 'black'
    });
});


/*********   Event hover   ****/

$('.event').mouseenter((e)=>{
$(e.target).find('p').css('opacity','1');
$(e.target).find('.eventDate').css({
    'border':' 1px solid #00a107',
    'color':'#00a107'
});
});
$('.event').mouseleave((e)=>{
    $(e.target).find('p').css('opacity','.8');
    $(e.target).find('.eventDate').css({
        'border':' 1px solid #c7c7c7bd',
        'color':'black'});
    });

    /********** Search BLOCK slideDOWN ************/


    $('.searchblock').on('click',()=>{
$('.block').slideToggle();
    });