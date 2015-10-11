Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.startup(function (){
//    $('#listen-or-record').modal('show');
});

Template.body.events({
    'click .button': function (event) {
        console.log(event.target);
    }
});
