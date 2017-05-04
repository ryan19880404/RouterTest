var pageModel = function () {
    var self = this;
    self.pageready = ko.observable(false);

    self.module = {
        normal: ko.observable(undefined),
        popup: ko.observable(undefined)
    }

    var util = {
        addModule: function (name, config) {
            modulesMapping[name] = {
                name: name,
                model: config.module
            };
            modules.push(modulesMapping[name]);
        }
    };

    var modulesMapping = {};
    var modules = [];

    util.addModule('main', {
        module: mainPageModel
    });
    util.addModule('game', {
        module: gamePageModel
    });

    self.router = ko.pureComputed(function () {
        return JSON.stringify( _routers.findRouter(window.location.href));
    }, self);

    self.registModule = function () {
        var initModel = function (model, args) {
            args = $.map(args, function (arg, key) {
                return self[arg];
            });
            args.splice(0, 0, null, self);
            return new (model.bind.apply(model, args))();
        }
        for (var index in modules) {
            var module = modules[index];
            self[module.name] = new module.model();
        }
    };

    self.init = function () {

    };

    self.ready = function () {
        self.pageready(true);
    }
};