// ref: https://github.com/js-cookie/js-cookie
var ck = {
    options: {
        target: $('#privacy-cookies'),
        cname: '_mrw_pck',
        cdomain: document.domain,
        cvalue: 1,
        cversion: '20190501',
        cpath: '/',
        exdays: 30,
        cookie: ''
    },
    checkCookies: function() {
        var _c = Cookies.get(ck.options.cname);
        if(_c != undefined)
            var _v = JSON.parse(atob(_c));

        if(_c == false || _c == undefined || _v.version < ck.options.cversion)
            ck.options.target.fadeIn(2000);
    },
    setCookies: function(cname, cvalue, cversion, domain, cpath, exdays) {
        $('a#accept').bind('click', function(){
            var _v = {value: cvalue, version: cversion};
            var value = btoa(JSON.stringify(_v));
            Cookies.set(cname,
                value,
                {
                    domain: domain,
                    expires: exdays,
                    path: cpath
                });
            ck.options.target.fadeOut('fast');
        })
    },
    init: function(){
        opt = ck.options;
        ck.checkCookies();
        ck.setCookies(ck.options.cname, ck.options.cvalue, ck.options.cversion, ck.options.cdomain, ck.options.cpath, ck.options.exdays);  
    }
}
$(document).ready(function(){
    ck.init();
});