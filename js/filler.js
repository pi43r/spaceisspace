function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}

setInterval(function () {
    printLetterByLetter("filler", "A Space is A Space ", 50);
}, 1100);