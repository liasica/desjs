"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.decodeHex = exports.encodeHex = void 0;
var des_js_1 = require("./des.js");
var Padding;
(function (Padding) {
    Padding[Padding["NULL"] = 0] = "NULL";
    Padding[Padding["PKCS7"] = 1] = "PKCS7";
    Padding[Padding["SPACES"] = 2] = "SPACES";
    Padding[Padding["NONE"] = 3] = "NONE";
})(Padding || (Padding = {}));
var Mode;
(function (Mode) {
    Mode[Mode["ECB"] = 0] = "ECB";
    Mode[Mode["CBC"] = 1] = "CBC";
})(Mode || (Mode = {}));
var encodeHex = function (s) {
    var r = '0x';
    var hexes = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
    for (var i = 0; i < s.length; i++) {
        r += hexes[s.charCodeAt(i) >> 4] + hexes[s.charCodeAt(i) & 0xf];
    }
    return r;
};
exports.encodeHex = encodeHex;
function decodeHex(h) {
    var r = '';
    for (var i = (h.substring(0, 2) === '0x') ? 2 : 0; i < h.length; i += 2) {
        r += String.fromCharCode(parseInt(h.substring(i, i + 2), 16));
    }
    return r;
}
exports.decodeHex = decodeHex;
var encrypt = function (key, message, iv, padding) {
    if (padding === void 0) { padding = Padding.NONE; }
    var mode = iv ? Mode.CBC : Mode.ECB;
    return (0, exports.encodeHex)((0, des_js_1.default)(key, message, 1, mode, iv, padding));
};
exports.encrypt = encrypt;
var decrypt = function (key, message, iv, padding) {
    if (padding === void 0) { padding = Padding.NONE; }
    var mode = iv ? Mode.CBC : Mode.ECB;
    return (0, des_js_1.default)(key, decodeHex(message), 0, mode, iv, padding).replace(/\0/g, '');
};
exports.decrypt = decrypt;
