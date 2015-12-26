var fs = require('fs');
var output = '';

var input = fs.readFileSync('../builds/tsisolib.d.ts');

var lines = input.split('\n');

for (var line of lines) {
    if (line.substr(0,3) === '///') { //skip external references
        continue;
    }
    if (line.substr(0,7) === 'declare') {
        var t = line.split(' ');
        var packageName = t[2];
    }
}
