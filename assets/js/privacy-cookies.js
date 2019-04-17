// ref: https://github.com/js-cookie/js-cookie
var ck = {
    options: {
        target: $('#privacy-cookies'),
        cname: '_mrw_pck',
        cdomain: document.domain,
        cvalue: 1,
        cpath: '/',
        exdays: 30,
        cookie: ''
    },
    checkCookies: function() {
        var c = Cookies();
        if((opt.cname in c) == false || (opt.cname in c) == 'undefined')
            opt.target.fadeIn(2000);
    },
    setCookies: function(cname, cvalue, domain, cpath, exdays) {
        $('a#accept').bind('click', function(){
            Cookies.set(cname, {
                value: cvalue,
                domain: domain,
                expires: exdays,
                path: cpath
            });
            opt.target.fadeOut('fast');
        })
    },
    init: function(){
        opt = ck.options;
        ck.checkCookies();
        ck.setCookies(opt.cname, opt.cvalue, opt.cdomain, opt.cpath, opt.exdays);  
    }
}
$(document).ready(function(){
    ck.init();
});