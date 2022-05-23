$(document).ready(function(){
    $('#cor').click(function(){
        $('#p').css("color", "red").addClass('green');
        $('button').removeClass('red');
        $('span')
            .text("Cor alterada com sucesso")
            .css({'border': '2px solid green', 'background-color': 'LightCoral', 'color': 'yellow'})
            .delay(3000)
            .fadeOut('fast');
    });
    $('#esc').click(function(){
        //$('#s').hide();
        //$('#s').fadeOut();
        //$('#s').fadeOut('slow');
        $('#s').fadeOut(4000);
        $('#s').delay(2000);
        $('#s').fadeIn(2000);
    });
});
function alerta(msg){
    alert("Evento de mouse pelo "+msg);
};