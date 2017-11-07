const path = require('path');
const APP_PATH = 'sauce-storage:ez-net-app_debug.apk';

exports.config = {
    specs: [
        path.join(__dirname, './test.js')
    ],
    exclude: [
    ],
    maxInstances: 1,
    
    capabilities: [{
        name:"my super test X",
        tags:["one","two","3"],
        'custom-data':{release:"3dgiordano"},
        build:process.env.TRAVIS_JOB_NUMBER,
        appiumVersion: '1.6.5',
        autoAcceptAlerts: true,
        autoGrantPermissions: true,
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Android Emulator',
        app: APP_PATH,
        browserName: '',
        deviceOrientation: 'portrait',
        //clearSystemFiles: false
    }],

    
    sync: true,
    coloredLogs: true,
    screenshotPath: './errorShots/',
    
    logLevel: 'verbose',
    baseUrl: 'http://localhost',
    waitforTimeout: 9999999,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    
    framework: 'mocha',
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
        doctor: true,
        verbose: false,
        verboseDebugging: false,
        vv: false,

        logger: console.log,
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
        
        dns: '8.8.8.8',
        
        // an optional suffix to be appended to the `readyFile` name.
        // useful when running multiple tunnels on the same machine,
        // such as in a continuous integration environment. (optional)
        readyFileId: null,

        connectRetries: 3,
        connectRetryTimeout: 2000,

        downloadRetries: 3,
        downloadRetryTimeout: 2000
        
    },
    
    reporters: ['spec', 'allure'],
    reporterOptions: {
      allure: {
        outputDir: 'allure-report'
      }
    }
    
    };
