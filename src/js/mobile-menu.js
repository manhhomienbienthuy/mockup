define(['jquery'], function($) {
    class MobileMenuExport {
        constructor(menu) {
            this.menu = $(menu);
            this.init();
        }

        init() {
            this.menu.addClass('mobile-navigation');
            this.button = $('<div class="navigation-button"><a href="#"><i class="fa fa-bars"></i></a></div>');
            this.button.insertBefore(this.menu.parent());
            this.button.children('a').on( 'click', (event) => {
                event.preventDefault();
                this.menu.toggleClass('active');
                this.button.toggleClass('active');
            });
        }
    }

    return new MobileMenuExport('header .navigation');
});
