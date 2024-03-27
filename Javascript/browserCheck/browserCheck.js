"use strict";
exports.__esModule = true;
exports.browserCheck = void 0;
var browserCheck = function () {
    var agent = navigator.userAgent.toLowerCase();
    console.log(agent);
    var BrowserIs = function (name) { return agent.indexOf(name) !== -1; };
    if (BrowserIs("chrome")) {
        if (BrowserIs("edg"))
            return "Edge";
        return "Chrome";
    }
    if (BrowserIs("opera"))
        return "Opera";
    if (BrowserIs("staroffice"))
        return "Star Office";
    if (BrowserIs("webtv"))
        return "WebTV";
    if (BrowserIs("beonex"))
        return "Beonex";
    if (BrowserIs("chimera"))
        return "Chimera";
    if (BrowserIs("netpositive"))
        return "NetPositive";
    if (BrowserIs("phoenix"))
        return "Phoenix";
    if (BrowserIs("firefox"))
        return "Firefox";
    if (BrowserIs("safari"))
        return "Safari";
    if (BrowserIs("skipstone"))
        return "SkipStone";
    if (BrowserIs("netscape"))
        return "Netscape";
    if (BrowserIs("mozilla/5.0"))
        return "Mozilla";
    if (BrowserIs("msie")) {
        var rv = -1;
        if (navigator.appName === "Microsoft Internet Explorer") {
            var ua = navigator.userAgent;
            // eslint-disable-next-line prefer-regex-literals
            var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return "Internet Explorer ".concat(rv);
    }
    return "-";
};
exports.browserCheck = browserCheck;
console.log((0, exports.browserCheck)());
