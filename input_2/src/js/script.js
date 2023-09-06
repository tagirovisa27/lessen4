$('#button').click(function () {
    let x = $('#numberX').val();
    let y = $('#numberY').val();
    $('#block').css({ left: x + 'px', top: y + 'px' });
});