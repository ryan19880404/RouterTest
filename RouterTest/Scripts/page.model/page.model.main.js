var mainPageModel = function () {
    var self = this;
    var awaiter = new awaiterModel();

    self.init = function (params, querys) {
        console.log('initial main');
    };

    self.dispose = function () {
        console.log('dispose main');
    };
};