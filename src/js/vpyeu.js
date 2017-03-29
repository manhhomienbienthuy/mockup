requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min',
        'mobile-menu': './mobile-menu.min',
        'scroll-top': './scroll-top.min'
    }
});

var mods = ['mobile-menu'];

function getPageHeight() {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);
}

if (getPageHeight() > window.innerHeight * 2) {
    mods.push('scroll-top');
}

requirejs(mods);
