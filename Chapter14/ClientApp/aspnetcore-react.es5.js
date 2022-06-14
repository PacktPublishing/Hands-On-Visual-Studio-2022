// This script configures the .env.development.local file with additional environment variables to configure HTTPS using the ASP.NET Core
// development certificate in the webpack development proxy.

'use strict';

var fs = require('fs');
var path = require('path');

var baseFolder = process.env.APPDATA !== undefined && process.env.APPDATA !== '' ? process.env.APPDATA + '/ASP.NET/https' : process.env.HOME + '/.aspnet/https';

var certificateArg = process.argv.map(function (arg) {
    return arg.match(/--name=(?<value>.+)/i);
}).filter(Boolean)[0];
var certificateName = certificateArg ? certificateArg.groups.value : process.env.npm_package_name;

if (!certificateName) {
    console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.');
    process.exit(-1);
}

var certFilePath = path.join(baseFolder, certificateName + '.pem');
var keyFilePath = path.join(baseFolder, certificateName + '.key');

if (!fs.existsSync('.env.development.local')) {
    fs.writeFileSync('.env.development.local', 'SSL_CRT_FILE=' + certFilePath + '\nSSL_KEY_FILE=' + keyFilePath);
} else {
    var lines = fs.readFileSync('.env.development.local').toString().split('\n');

    var hasCert = undefined,
        hasCertKey = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            if (/SSL_CRT_FILE=.*/i.test(line)) {
                hasCert = true;
            }
            if (/SSL_KEY_FILE=.*/i.test(line)) {
                hasCertKey = true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (!hasCert) {
        fs.appendFileSync('.env.development.local', '\nSSL_CRT_FILE=' + certFilePath);
    }
    if (!hasCertKey) {
        fs.appendFileSync('.env.development.local', '\nSSL_KEY_FILE=' + keyFilePath);
    }
}

