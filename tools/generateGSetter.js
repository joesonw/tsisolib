var readline = require('readline');
var util = require('util');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

rl.question('Enter properties (seperate by comma):', function(result) {
    console.log('\n');
    var attrs = result.split(',');
    for (var attr of attrs) {
        var a = attr.split(':');
        var name = a[0];
        var type = a[1];

        console.log(util.format('\t\tprotected _%s:%s', name, type));
        console.log(util.format('\t\tget %s():%s {', name, type));
        console.log(util.format('\t\t\treturn this._%s;', name));
        console.log('\t\t}');
        console.log(util.format('\t\tset %s(%s:%s) {', name, name, type));
        console.log(util.format('\t\t\tthis._%s = %s;', name, name));
        console.log('\t\t}');
        console.log('');
    }

})
