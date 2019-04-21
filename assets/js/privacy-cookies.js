// ref: https://github.com/js-cookie/js-cookie
var ck = {
    options: {
        target: $('#privacy-cookies'),
        cname: '_mrw_pck',
        cdomain: document.domain,
        cvalue: 1,
        cversion: '20190420',
        cpath: '/',
        exdays: 30,
        cookie: ''
    },
    checkCookies: function() {
        var c = Cookies();
        if((opt.cname in c) == false || (opt.cname in c) == 'undefined')
            opt.target.fadeIn(2000);
    },
    setCookies: function(cname, cvalue, cversion, domain, cpath, exdays) {
        $('a#accept').bind('click', function(){
            var value = btoa({value: cvalue, version: cversion});
            Cookies.set(cname,
                value,
                {
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
        ck.setCookies(opt.cname, opt.cvalue, opt.cversion, opt.cdomain, opt.cpath, opt.exdays);  
    }
}
$(document).ready(function(){
    ck.init();
});