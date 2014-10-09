var terms = {
    0: [ "creative", "interactive", "visual", "graphics", "technical" ],
    1: [ "coder", "programmer", "developer", "engineer", "director" ]
};

var currentItems = {
    0: 0,
    1: 0
};

$(document).ready(function() {

    // Disable certain links
    $('section [href=#]').click(function (e) {
        e.preventDefault()
    })

    // when a term is clicked, replace it with the next one in the array (wrapping back around to the start of the array)
    $('.lead .btn').click(function(event) {
        var pos = $(this).data('pos');
        currentItems[pos] = (currentItems[pos] + 1) % terms[pos].length;
        $(this).children('span').slideUp("fast", function () {
            $(this).html(terms[pos][currentItems[pos]]);
            $(this).slideDown("fast")
        });
    });

    // make the terms cycle through automatically every 5 seconds, with a slight delay between them
    setInterval(function() {
        $('.lead .btn[data-pos="0"]').trigger('click');
    }, 5000);
    setTimeout(function() {
        setInterval(function() {
            $('.lead .btn[data-pos="1"]').trigger('click');
        }, 5000);
    }, 200);

    // carousel settings
    $('.carousel').carousel({ "interval": false });

});