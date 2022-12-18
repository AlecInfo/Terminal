
// const commandss = [
//     {name: 'help', action: help()},
//     {name: 'help', action: help()},
//     {name: 'help', action: help()},
//     {name: 'help', action: help()},
//     {name: 'help', action: help()},
// ];

// const commandss = [
//     {name: 'help', action: help},
//     {name: 'help -a', action: help_all},
//     {name: "about", action: about},
//     {name: "cd ", action: cd("test")},
// ];

function help() {
    text = [
        'about...............Who is Piette Alec',
        'clear...............Clear the terminal',
        'help................Displays the list of commands',
        'repo................Go see the code',
        'social..............Display social networks',
    ];

    write(text);
}

function help_all(){
    text = [
        'about...............Who is Piette Alec',
        'cd (path)...........Change path just visual',
        'clear...............Clear the terminal',
        'help................Displays the list of commands',
        'help -a.............Displays the all list of commands',
        'repo................Go see the code',
        'social..............Display social networks',
    ]

    write(text);
}


function about() {
    text = [
        'My name is Alec Piette and i am 19 years old.',
        'I am currently in the last year of training as an application developer at the IT professional training center (CFPTi) in Geneva.',
        'I practice application development with C# mainly, but also websites with HTML, CSS, PHP, Javascript.',
        'During my training I had the opportunity to touch all areas of IT from infrastructure to network through development.',
        'But what I\'m most comfortable with is code.'
    ];

    write(text);
}

function cd(param) {
    var location = param.substring(3).trim();

    text = [
        'moved to: ' + location
    ];
    
    $('#currentLocation').html(location);
    write(text);
}

function clear(){
    window.location.reload();
}

function repo() {
    window.open("https://github.com/AlecInfo/Terminal");
}

function social(){
    text = [
        'My social networks:',
        'Email........<a onclick="sendMail()">alecpiettepro@gmail.com</a>',
        'Github.......<a href="https://github.com/AlecInfo">https://github.com/AlecInfo</a>',
        'Twitter......<a href="https://twitter.com/p_alec_p">https://twitter.com/p_alec_p</a>',
    ];

    write(text);
}

function sendMail() {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHVhQxQQWVgjTpKtWzVrZgkgKDcwTWKjHSXlkpcglXwqLPRnQkrsZdttSzVbNPQChLjFg');
}

