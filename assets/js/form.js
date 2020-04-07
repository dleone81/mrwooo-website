var smtp = {
    "token": "bfa671e2-1762-4df4-aa17-f4d1fe0b8957",
    "to": "hello@mrwooo.com",
    "in": 750,
    "out": 5000,

    notify: function(m){
        if(m === 'OK'){
            notify.message('Your email has been submitted successful','success');
        } else {
            notify.message('Unable to sumbit your request. Please try later','warning');
        }
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
        ).then(notify.destroy);
    },
    init: function(){
        smtp.send();
    }
}
$(document).ready(function(){
    smtp.init();
});