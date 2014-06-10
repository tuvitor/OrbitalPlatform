/**
 * Created by codeforcoffee on 6/9/14.
 */
App.Models.PermissionsModel = Backbone.Model.extend({

    Roles: [ 'admin', 'moderator', 'user', 'lurker' ],
    PagePermissions: {
        readAccess: null,
        writeAccess: null,
        banned: null
    }

});