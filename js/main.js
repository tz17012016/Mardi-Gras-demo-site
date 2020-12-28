// MDB Lightbox Init

/*document.querySelector("#card-1").addEventListener("click", () => {
    window.open(
        "https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/",
        "_blank"
    );
});
document.querySelector("#card-2").addEventListener("click", () => {
    window.open("https://walk-ons.com/", "_blank");
});
document.querySelector("#card-3").addEventListener("click", () => {
    window.open("https://www.acehotel.com/neworleans/", "_blank");
});
document.querySelector("#card-4").addEventListener("click", () => {
    window.open("https://www.ritzcarlton.com/en/hotels/new-orleans", "_blank");
});
document.querySelector("#card-5").addEventListener("click", () => {
    window.open("https://www.premiumparking.com/P402", "_blank");
});
document.querySelector("#card-6").addEventListener("click", () => {
    window.open("https://www.lcm.org/", "_blank");
});
document.querySelector("#card-7").addEventListener("click", () => {
    window.open("http://www.museumofdeath.net/", "_blank");
});
document.querySelector("#card-8").addEventListener("click", () => {
    window.open("https://thehauntedmuseum.com/", "_blank");
});*/

///
/*let $el, $ps, $up, totalHeight;
$(".infoAfect .btn").on("click", function(e) {
    e.preventDefault();
    totalHeight = 0;
    $el = $(this);
    $p = $el.parent();
    $up = $p.parent();
    $ps = $up.find("p:not('.read-more')");
    $ps.each(function() {
        totalHeight += $(this).outerHeight();
    });
    console.log(totalHeight);
    $up.css({
        height: $up.outerHeight(),
        "max-height": 9999,
    });
    $up.animate({
        height: totalHeight + 200,
    });
    $p.fadeToggle(2000);
    return false;
});*/

$(".read-more").click(function(e) {
    let hrefAr = [
        "https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/",
        "https://walk-ons.com/",
    ];
    e.preventDefault();
    hrefAr.map((item) => {
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect")
            .slideToggle();
    });
});