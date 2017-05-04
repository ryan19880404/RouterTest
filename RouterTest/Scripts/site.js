var _awaiter = new awaiterModel()
var _routers = new routerModel();
var app = new pageModel();
app.registModule();
//app.registRouter();

ko.applyBindings(app, document.getElementsByName('html')[0]);

_awaiter
    .registPageLoad()
    .start({
        before: function () {
        },
        success: function () {
            app.init();
        },
        complete: function () {
            app.ready();
        }
    });