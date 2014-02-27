function $(s) {
    return document.querySelector(s);
}

(function addNav() {
    function next(url) {
        return url.replace(/(\d+)(\.html)$/, function (str, p1, p2) {
            return((Number(p1) + 1) + p2);
        });
    }

    function locationChange(fn) {
        window.location.href = fn(window.location.href)
    }

    function prev(url) {
        return url.replace(/(\d+)(\.html)$/, function (str, p1, p2) {
            return((Number(p1) - 1) + p2);
        });
    }

    function clreateElement(name, fn) {
        var elm = document.createElement('a');
        var linkText = document.createTextNode(name);
        elm.appendChild(linkText);
        elm.href = '#';
        elm.onclick = function(e){
            locationChange(fn);
        }

        return elm;
    }

    var prevLink = clreateElement('prev << ', prev);
    var nextLink = clreateElement('next >>', next);

    $('#nav').appendChild(prevLink);
    $('#nav').appendChild(document.createTextNode(" | "));
    $('#nav').appendChild(nextLink);
})();



