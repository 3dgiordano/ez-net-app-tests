var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        
}
};
webdriverio
    .remote(options)
    .init()
    .pause(2000)
    .end().catch(function (e) {
        console.error(e.stack);
    });
    
