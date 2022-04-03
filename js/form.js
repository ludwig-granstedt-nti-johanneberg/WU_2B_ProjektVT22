"use strict";
var form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = document.getElementById('title-input');
    var email = document.getElementById('email-input');
    var message = document.getElementById('message-input');
    title.value = '';
    email.value = '';
    message.value = '';
    alert("Message sent!");
});
//# sourceMappingURL=form.js.map