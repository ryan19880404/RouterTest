/// <reference path="router.model/router.base.js" />

var routerModel = function () {
    var self = this;

    var util = {
        stringToObject: function (string) {
            return JSON.parse('{"' + string.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        }
    };

    self.findRouter = function (url) {
        var parser = document.createElement('a');
        parser.href = url;

        var router = findRouterAndParams(parser.pathname);

        if (router) {
            var querysObject = {};
            if (parser.search) {
                var querys = parser.search.substring(1);
                querysObject = util.stringToObject(decodeURI(querys));
            };

            return {
                routerName: router.routerName,
                params: router.params,
                querys: querysObject
            };
        }
    };

    var findRouterAndParams = function (url) {
        var matchRouter = undefined;
        var getRegex = function (defaultUrl) {
            var paramNames = [];
            var regex = new RegExp(defaultUrl.replace(/([:*])(\w+)/g, function (full, dots, name) {
                paramNames.push(name);
                return '([^\/]+)';
            }).replace(/\*/g, '(?:.*)') + '(?:\/$|$)', '');
            return {
                regex: regex,
                paramNames: paramNames
            };
        };
        var combineParams = function (names, match) {
            var results = [];
            for (var i in names) {
                results.push(names[i] + '=' + match[+i + 1]);
            }
            return results.join('&');
        };
        for (var routerName in routerMap) {
            var router = routerMap[routerName];
            var routerPart = getRegex(router.defaultUrl);
            var m = url.match(routerPart.regex);
            if (m) {
                var params = {};
                if (routerPart.paramNames.length > 0) {
                    params = util.stringToObject(combineParams(routerPart.paramNames, m));
                }
                matchRouter = {
                    routerName: routerName,
                    params: params
                };
                break;
            }
        };
        return matchRouter;
    };

    self.start = function () {
        _router.resolve();
    };
};