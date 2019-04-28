var hs = {
    portal: "5627908",
    form: {
        "contact": {
            endpoint: "https://api.hsforms.com/submissions/v3/integration/submit",
            id: "a64a928c-6554-4d15-9f82-3e791166b2a4"
        },

        /**
         * ref: https://developers.hubspot.com/docs/methods/forms/submit_form
         * endpoint: https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formGuid
         */
        send: function() {
            $('input#send').on('click', function(){
                var form = $(this).closest('form');
                var id = $(form).attr('id');
                var hsForm = $(form).attr('data-hs-form');
            
                // data push to hubspot
                var _data = {"fields":[]};

                // data push to smtp for notification
                var _smtp = [];

                var _input = form.find('.hs');

                // check if email exists and isn't null
                if($('#email.hs').val().length === 0)
                    return false;

                _input.each(function(i,v){
            
                    if($(v).val().length !== 0){
                        _data.fields.push({
                            "name": $(v).attr('id'),
                            "value": $(v).val()
                        })
                        _smtp[$(v).attr('id')] = $(v).val();
                    }
                })

                $.ajax({
                    async: true,
                    cache: true,
                    crossDomain: true,
                    url: hs.form[hsForm].endpoint+'/'+hs.portal+'/'+id,
                    data: JSON.stringify(_data),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json",
                    success: function( data, textStatus, jqXHR ){
                        // check if notification is needed
                        smtp.send(_smtp['firstname'], _smtp['email'], _smtp['message'])
                    },
                    error: function( jqXHR, textStatus, errorThrown ){
                        // empty
                        console.log('error');
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    },
                    complete: function( jqXHR, textStatus ){
                        $('form#'+id+' input, form#'+id+' textarea').attr('readonly', true);
                    }
                })
            })
        }
    },

    init: function(){
        hs.form.send();
    }
}
$(document).ready(function(){
    hs.init();
});
