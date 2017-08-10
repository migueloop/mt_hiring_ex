// returns the first location of a given char or -1 otherwise
function _patternMatch(string, index, pattern) {
    var i = index;
    for (var j = 0; j < pattern.length; j++) {
        if (string.charAt(i) != pattern.charAt(j)) {
            return false;
        }
        i++;
    }

    return true;
}

// native function String.indexOf() reimplementation
function customIndexOf(string, pattern) {
   // here we consider smaller pattern than the given string case
    var length = string.length - pattern.length;
    for (var index = 0; index <= length; index++) {
        if (_patternMatch(string, index, pattern)) {
            return index;
        }
    }

    return -1;
}

if(typeof exports !== 'undefined') {
    exports.customIndexOf = customIndexOf;
}
