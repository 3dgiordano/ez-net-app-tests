const path = require('path');
const APP_PATH = 'sauce-storage:ez-net-app_debug.apk';

exports.config = {
    specs: [
        path.join(__dirname, './test.js')
    ],
    exclude: [
    ],
    maxInstances: 1,
    sync: true,
    coloredLogs: true,
    logLevel: 'verbose',
    baseUrl: 'http://localhost',
    waitforTimeout: 9999999,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
      'junit',
      'spec'
    ],
    reporterOptions: {
        junit: {
            outputDir: 'report.xml'
        }
    },
    screenshotPath: './errorShots/',
    mochaOpts: {
        ui: 'bdd',
        fullTrace: true,
        timeout: 99999999
    },
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    sauceConnectOpts: {
        /*verbose: true,
        verboseDebugging: true,
        vv: true,
        doctor: true,*/
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    },
    
    capabilities: [{
        name:"my super test X",
        tags:["one","two","3"],
        'custom-data':{release:"3dgiordano"},
        build:process.env.TRAVIS_JOB_NUMBER,
        appiumVersion: '1.6.5',
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Android Emulator',
        app: APP_PATH,
        browserName: '',
        deviceOrientation: 'portrait',
        //clearSystemFiles: false
    }]
};
