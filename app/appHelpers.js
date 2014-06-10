/**
 * Created by codeforcoffee on 6/10/14.
 */
App.Services.FetchModels = function() {
    // fetch all collections/models from server
    this.status = "green";
    var backgroundProcess = new Worker("app/backgroundProcess.js");
    backgroundProcess.postMessage(this.status);
    backgroundProcess.onmessage = function (e) {
        // todo
    }
}


