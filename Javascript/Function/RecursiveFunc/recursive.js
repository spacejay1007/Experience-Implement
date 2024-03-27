"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var data_1 = require("./data");
var makeTree = function (list, treelevelNumber, id) {
    if (treelevelNumber === void 0) { treelevelNumber = 0; }
    if (id === void 0) { id = -1; }
    // prettier-ignore
    var childrenFilter = list.filter(function (item) { return item.dirPid === id; })
        .map(function (items) {
        return (__assign(__assign({}, items), { children: makeTree(list, treelevelNumber + 1, items.dirId), state: { expand: false, selected: 0, treeLevel: treelevelNumber } }));
    });
    return childrenFilter;
};
console.log(makeTree(data_1.data));
