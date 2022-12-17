$(function() {
    $('#terminal').click(function() {
        $('input').focus();
      });

    $('#input').on('keyup', function search(e) {

        // display the command
        $('#command').text($(this).val());

        if (e.keyCode == 13) {
            // add the command in the history
            write($(this).val(), true);
            // apply the command 
            commands($(this).val())

            // clear the input
            $('input').val('');
            $('#command').text('');

            // direcly scoll to bottom
            var out = document.getElementById("terminal__body");
            out.scrollTop = out.scrollHeight - out.clientHeight;

        }
    });
});

function commands(cmd) {   
    switch (cmd) {
        case 'help':
            help();
            break;

        case 'about':
            about();
            break;

        case 'clear':
            clear();
            break;

        case 'repo':
            repo();
            break;

        case 'social':
            social();
            break;
    }
    if (cmd.substring(0, 3) === 'cd ') {
        cd(cmd);
    }
}

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