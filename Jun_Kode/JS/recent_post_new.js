// Related Posts
$(document).ready(function () {
    function relatedPost(g, e, r) {
        $.ajax({
            url:
                "/feeds/posts/default/-/" +
                e +
                "?alt=json-in-script&max-results=" +
                r,
            type: "get",
            dataType: "jsonp",
            success: function (t) {
                for (
                    var u = "", h = '<div class="related">', x = 0;
                    x < t.feed.entry.length;
                    x++
                ) {
                    for (var z = 0; z < t.feed.entry[x].link.length; z++) {
                        if ("alternate" == t.feed.entry[x].link[z].rel) {
                            u = t.feed.entry[x].link[z].href;
                            break;
                        }
                    }
                    var p = t.feed.entry[x].title.$t;
                    var c = t.feed.entry[x].content.$t;
                    var y = $("<div>").html(c);
                    if (
                        c.indexOf("https://www.youtube.com/embed/") > -1 ||
                        c.indexOf("https://www.youtube.com/embed/") > -1
                    ) {
                        var d = t.feed.entry[x].media$thumbnail.url,
                            m = d.replace("/default.jpg", "/mqdefault.jpg"),
                            k = m;
                    } else if (c.indexOf("<img") > -1) {
                        var s = y.find("img:first").attr("src"),
                            v = s.replace("s72-c", "s600");
                        var k = v;
                    } else {
                        var k =
                            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNMjYNtT6FIEzzRy6julAPpTG0WFDQMaCSUDU2H1zZOllflpG0n7gTzRxU1vNUmT2nGiVlx17Qie1uYbiOW6zk0UAMBaltqIdbQjHA2lTT7v7c1SXgymykxHLXDKkAgWjs4zZHqo7kpeUk3K7yyiBlS_YTlrPa97my58TSB4VY4isz_LDE1ffbclj7eQ/s16000/nelayankode.png";
                    }
                    h +=
                        '<li><h3 class="related-title"><a href="' +
                        u +
                        '">' +
                        p +
                        "</a></h3></li>";
                }
                (h += "</div>"), g.html(h);
            },
        });
    }
    $("#related-posts").each(function () {
        var g = $(this),
            e = g.text(),
            r = 6;
        relatedPost(g, e, r);
    });
});
