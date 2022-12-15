var text = "";

const input = document.getElementById('target');

input.addEventListener('keypress', logKey);

function logKey(e) {
    text += ` ${e.code}`;

    alert(text);
}