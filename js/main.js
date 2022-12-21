function closeTermianl(){
  document.getElementById('terminal').style.visibility = 'hidden';

  const pre = document.createElement("pre");
  document.getElementById('container').appendChild(pre);

               let x=1760,
          z=0,y=0;setInterval
        (()=>{z+=.07,y+=.03;const
      a=[...new Array(x)].map( (a,r
    )=>r % 80 === 79 ?"\n":" "),r=new
   Array(x).fill(0), t= Math.cos(z),e=
  Math.sin(z),n=Math.cos(y), o=Math.sin
 (y);for(let s=0;s<6.28; s+=.07){const c
 =Math.cos(s),h=      Math.sin(s);for(let
s=0;s<6.28;s+=          .02){const v=Math
.sin(s),M=Math          .cos(s),i=c+2,l=1
 /(v*i*e+h*t+5          ),p=v*i*t-h*e,d=0
 |40+30*l*(M*i*n      -p*o),m=0|12+15*l*
  (M*i*o+p*n),f=0|8*((h*e-v*c*t)*n-v*c*
    e-h*t-M*c*o), y=d+80*m;m<22&&m>=0
     &&d>=0&&d<79&&l>r[y] &&(r[y]=l,
      a[y]= ".,-~:;=!*#$@"[f>0?f:0
       ])}}pre.innerHTML=a.join
          ("")},50); /* JS by 
              @housamz */

  
}

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