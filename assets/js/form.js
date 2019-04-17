var smtp = {
    "token": "bfa671e2-1762-4df4-aa17-f4d1fe0b8957",
    "to": "hello@mrwooo.com",
    "in": 750,
    "out": 5000,

    notify: function(m){
        var success = $('<i>');
        success.addClass('fa fa-check-circle').css({'margin': '15px','color': 'green', 'text-shadow': '0px 0px 8px white'});
        success.hide();

        var error = $('<i>');
        error.addClass('fa fa-times-circle').css({'margin': '15px','color': 'red', 'text-shadow': '0px 0px 8px white'});
        error.hide();

        var target = $('#send');

        if(m === 'OK'){
            target.after(success.fadeIn(smtp.in, 'swing', function(){
                success.fadeOut(smtp.out, 'swing', function(){
                    success.remove();
                }
            )}))
        } else {
            target.after(error.fadeIn(smtp.in, 'swing', function(){
                error.fadeOut(smtp.out, 'swing', function(){
                    error.remove();
                }
            )
        }))};
    },
    send: function(firstname, email, msg){

        if(firstname == undefined && email == undefined && msg == undefined)
            return;

        Email.send({
            SecureToken: smtp.token,
            To: smtp.to,
            From: firstname+' <'+email+'>',
            Subject: firstname+', has just contacted you',
            Body: msg,
        }).then(
            message => smtp.notify(message)
        );
    },
    init: function(){
        smtp.send();
    }
}
$(document).ready(function(){
    smtp.init();
});