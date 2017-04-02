button.addEventListener("click", function() {
    for (var i = 0; i < 5; i++) {
        document.querySelectorAll('.right span')[i].innerHTML = document.querySelectorAll('.left input')[i].value;
    }
})