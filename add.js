
// fulfill every div

$('button').click( function (){
    $('div').not("#container").not(".line1").not(".line2").not(".line3").not(".line4").not(".line5").toggleClass('full')
})

// fulfill circles

$('.circle').click( function () {
    $('full').removeClass('circle')
    $(this).toggleClass('full')
})

// fulfill lines if .square is onClick

$('.square1').click( function () {
    $('.line1').children().toggleClass('full')
})

$('.square2').click( function () {
    $('.line2').children().toggleClass('full')
})

$('.square3').click( function () {
    $('.line4').children().toggleClass('full')
})

$('.square4').click( function () {
    $('.line5').children().toggleClass('full')
})

// fulfill lines and columns if .losange is onClick

$('.losange').click( function () {
    $('.line3').children().toggleClass('full')
    $('#circle1').toggleClass('full')
    $('#circle2').toggleClass('full')
    $('#circle3').toggleClass('full')
    $('#circle4').toggleClass('full')
})
