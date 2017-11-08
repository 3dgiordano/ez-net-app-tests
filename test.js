var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        
}
};
webdriverio
    .remote(options)
    .init()
    .end().catch(function (e) {
        console.error(e.stack);
    });
    
