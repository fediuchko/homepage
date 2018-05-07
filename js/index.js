$(function(){
    $('#feedback input[type=submit]').click(sendForm); 
 });
 
 function sendForm(ev) {
     const form  = document.getElementsByTagName('form')[0];
     if (form.checkValidity()) {
         ev.preventDefault();
         $.ajax({
             url: "https://formspree.io/elvirchuk62@gmail.com", 
             method: "POST",
             data: {
                 name: $('#name').val(),
                 email: $('#email').val(),
                 message: $('#message').val()
             },
             dataType: "json"
         })
          .done( () => $('#thank-dialog').attr('open', 'open') )
          .fail( () => $('#error-dialog').attr('open', 'open') );    
     }
 }
 
