$(function() {
    $('#terminal').on('click', function() {
        $('#input').focus();
    });

    $('#input').on('keydown', function search(e) {

        // display the command
        $('#command').text($(this).val());

        if (e.keyCode == 13) {
            // add the command in the history
            write($(this).val(), true);
            
            commands($(this).val())

            // change the path with the cd command
            if ($(this).val().substring(0, 3) === 'cd ') {
                $('#currentLocation').html($(this).val().substring(3).trim());
                write(cd + $('#currentLocation').text());
            }

            // clear the input
            $('#input').val('');

            // direcly scoll to bottom
            var out = document.getElementById("terminal__body");
            out.scrollTop = out.scrollHeight - out.clientHeight;

        }
    });
});

function write(text, isNewLine) {
    if (isNewLine) {
        $('#history').append(
            `<span class="terminal__line--user">${$('#current_User').text()}</span>` + 
            `<span class="terminal__line--location">${$('#currentLocation').text()}</span>` + 
            `<span class="terminal__line--bling">${$('#currentBling').text()}</span>` + 
            text + 
            '<br/>'
            );
    }else{
        if (typeof(text) === 'string') {
            $('#history').append(
                '&emsp;&emsp;' +
                text + 
                ' <br>'
            );
        }else{
            text.forEach(element => {
                $('#history').append(
                    '&emsp;&emsp;' +
                    element + 
                    ' <br>'
                );
            });
        }        
    }
}

function commands(cmd) {
    switch (cmd) {
        case 'help':
            write(help);
            break;

        case 'about':
            write(about);
            break;

        case 'clear':
            window.location.reload();
            break;

        case 'repo':
            window.open("https://github.com/AlecInfo/Terminal");
            break;

    }
}