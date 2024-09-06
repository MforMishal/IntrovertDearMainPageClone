// Hide loader and reveal content
window.addEventListener("load", function() {
    var loader = document.querySelector(".loading-page");
    setTimeout(function() {
        gsap.to(loader, { opacity: 0, duration: 1, onComplete: function() {
            loader.style.display = "none";
        }});
    }, 2000);
});
