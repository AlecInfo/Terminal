// Define a function to run when the #terminal element is clicked
$('#terminal').click(function() {
    // Focus the input element when #terminal is clicked
    $('input').focus();
  });
  
  // Define a function to run when a keyup event occurs on the #input element
  $('#input').on('keyup', function search(e) {
  
    // Display the current value of the #input element in the #command element
    $('#command').text($(this).val());
  
    // If the key that was released is the enter key
    if (e.keyCode == 13) {
      // Add the current value of the #input element to the #history element
      write($(this).val(), true);
      // Run the commands function with the current value of the #input element (converted to lower case) as an argument
      commands($(this).val().toLowerCase());
  
      // Clear the #input element
      $('input').val('');
      // Clear the #command element
      $('#command').text('');
  
      // Scroll to the bottom of the #terminal__body element
      var out = document.getElementById("terminal__body");
      out.scrollTop = out.scrollHeight - out.clientHeight;
    }
  });
  
  // Define the commands function, which takes a cmd argument
  function commands(cmd) {   

    // Switch on the value of the cmd argument
    switch (cmd) {
      // If cmd is "help"
      case 'help':
        // Call the help function
        help();
        break;
      
      // If cmd is "help -a"
      case 'help -a':
        // Call the help_all function
        help_all();
        break;
  
      // If cmd is "about"
      case 'about':
        // Call the about function
        about();
        break;
  
      // If cmd is "clear"
      case 'clear':
        // Call the clear function
        clear();
        break;

      case 'games':
        games();
        break;
  
      // If cmd is "repo"
      case 'repo':
        // Call the repo function
        repo();
        break;
  
      // If cmd is "social"
      case 'social':
        // Call the social function
        social();
        break;
      
      // If none of the above cases match
      default:
        // If the cmd argument starts with "cd "
        if (cmd.substring(0, 3) === 'cd ') {
            // Call the cd function with the cmd argument
            cd(cmd);
        }else{
            // Call the error function
            error();
        }
        break;
    }
  }
  
  // Define the write function, which takes a text argument and an isNewLine argument
  function write(text, isNewLine) {
    // If isNewLine is true
    if (isNewLine) {
      // Append a new line of text to the #history element, including the current values of the #current_User, #currentLocation, and #currentBling elements
      $('#history').append(
        `<span class="terminal__line--user">${$('#current_User').text()}</span>` +
        `<span class="terminal__line--location">${$('#currentLocation').text()}</span>` +
        `<span class="terminal__line--bling">${$('#currentBling').text()}</span>` +
        text +
        '<br/>'
        );
    }
    // If isNewLine is false
    else {
      // If the text argument is a string
      if (typeof(text) === 'string') {
        // Append the text to the #history element, preceded by some whitespace
        $('#history').append(
          '&emsp;&emsp;' +
          text +
          ' <br>'
        );
      }
      // If the text argument is an array
      else {
        // For each element in the text array
        text.forEach(element => {
          // Append the element to the #history element, preceded by some whitespace
          $('#history').append(
            '&emsp;&emsp;' +
            element +
            ' <br>'
          );
        });
      }
    }
  }