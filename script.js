$(document).ready(function(){
    $('#heartIcon').click(function(){
        $(this).hide();
        $('#loveMessage').show().addClass('fade-in');
    });
});