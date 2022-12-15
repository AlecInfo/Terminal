$(function() {
    $('#terminal').on('click', function() {
        $('#input').focus();
    });

    $('#input').on('keydown', function search(e) {

        // display the command
        $('#command').text($(this).val());

        if (e.keyCode == 13) {
            // add the command in the history
            $('#history').append(
                `<span class="terminal__line--user">${$('#current_User').text()}</span>` + 
                `<span class="terminal__line--location">${$('#currentLocation').text()}</span>` + 
                `<span class="terminal__line--bling">${$('#currentBling').text()}</span>` + 
                $(this).val() + 
                '<br/>'
                );

            // change the path with the cd command
            if ($(this).val().substring(0, 3) === 'cd ') {
                $('#currentLocation').html($(this).val().substring(3));
            }

            // direcly scoll to bottom
            var out = document.getElementById("terminal__body");
            out.scrollTop = out.scrollHeight - out.clientHeight;

            // clear the input
            $('#input').val('');

        }
    });
});