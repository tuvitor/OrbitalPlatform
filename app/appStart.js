/**
 * Created by codeforcoffee on 6/9/14.
 */
window.App = Backbone.View.extend ({
    Models: {},
    Views: {},
    Routes: {},
    Collections: {},
    Services: {},
    events: {
        // use data-internal="true" attr for backbone links
        'click a[data-internal]': function(e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname, {
                trigger: true
            });
        }
    },
    start: function() {
        Backbone.history.start({
            pushState: true
        });
        var appStartInstance = new App.Services.AppStart();
        appStartInstance.populateModels();
    }
});
$(function() {
    App.start();
});
App.Services.AppStart = function() {
  try {
      // fetch all collections/models from server
      // we will use a webworker to check for updates every 60 seconds
      App.Services.FetchModels();
  } catch (e) {
      throw new Error(e);
  }
};