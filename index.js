button.addEventListener("click", function() {
    for (var i = 0; i < 5; i++) {
        document.querySelectorAll('.right span')[i].innerHTML = document.querySelectorAll('.left input')[i].value;
    }
})


http: //js.jirengu.com/jovukinune/2/edit


    function assert(value, description) {
        value = value || '';
        if (value === true) {
            console.info('[success]');
        } else {
            console.error('[fail]:' + description);
        }
    }