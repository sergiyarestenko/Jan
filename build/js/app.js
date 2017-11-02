$("#menu").on("click","a", function (event) {
    event.preventDefault();
    closeMenu();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('#open-menu').on('click',openMenu);

function openMenu() {
    $('#menu').addClass('open');
    $('#open-menu').addClass('open');
}
function closeMenu() {
    $('#menu').removeClass('open');
    $('#open-menu').removeClass('open');
}
$('#age').on('change',function () {
    $('#age').addClass('selected')
});

$( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      min:0,
      max:4,
        slide: function( event, ui ) {
            var slider = $('#slider'),
                val = ui.value;
            function removeClass() {
                slider.removeClass('first second third fourth')
            }
            switch (val){
                case 1:
                    removeClass();
                    slider.addClass('first');
                    break;
                case 2:
                    removeClass();
                    slider.addClass('second');
                    break;
                case 3:
                    removeClass();
                    slider.addClass('third');
                    break;
                case 4:
                    removeClass();
                    slider.addClass('fourth');
                    break;
                default:
                    removeClass();
            }
        }
    });
} );

