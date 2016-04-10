function requirePath(folderName) {
    var normalizedPath = require('path').join(__dirname, folderName);

    require('fs').readdirSync(normalizedPath).forEach(function(file) {
        require('./' + folderName + '/' + file);
    });
}

requirePath('src');
requirePath('src/css');