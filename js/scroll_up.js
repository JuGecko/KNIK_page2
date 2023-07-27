window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    document.getElementById("goToTop").style.display = "block";
    } else {
    document.getElementById("goToTop").style.display = "none";
    }
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
