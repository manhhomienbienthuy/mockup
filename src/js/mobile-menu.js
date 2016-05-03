define(['jquery'], function($) {
    class MobileMenuExport {
        constructor(menu) {
            this.menu = $(menu);
            this.init();
        }

        init() {
            var self = this;
            self.menu.addClass('mobile-navigation');
            self.button = $('<div class="navigation-button"><a href="#"><i class="fa fa-bars"></i></a></div>');
            self.button.insertBefore(self.menu.parent());
            self.button.children('a').on( 'click', function(event){
                event.preventDefault();
                self.menu.toggleClass('active');
                self.button.toggleClass('active');
            });
        }
    };

    return new MobileMenuExport('header .navigation');
});
