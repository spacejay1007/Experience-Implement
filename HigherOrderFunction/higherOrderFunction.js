var log = console.log;
var applyFunc = function (f) { return f(1); };
var add = function (a) { return a + 2; };
log(applyFunc(add)); // 3
log(applyFunc(function (a) { return a - 1; })); // 0
var timeFunc = function (t, n) {
    var i = -1;
    while (++i < n)
        t(i);
};
timeFunc(log, 3); // 0 1 2
timeFunc(function (a) { return log(a + 10); }, 3); // 10 11 12
var addMaker = function (a) { return function (b) { return a + b; }; };
var add10 = addMaker(10);
log(add10(5)); // 15
log(add10(10)); // 20
