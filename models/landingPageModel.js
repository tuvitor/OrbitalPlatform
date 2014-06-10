/**
 * Created by codeforcoffee on 6/9/14.
 */
App.Models.LandingPageModel = Backbone.Model.extend({

    pageName: "Landing",
    route: "landing",
    wasUserFoundFromCookie: false,
    language: {
        welcomeStr: null,
        registerStr: null,
        registerEmailLabel: null,
        registerPasswordLabel: null,
        registerRegisterSubmitBtn: null
    }

});