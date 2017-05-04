var gamePageModel = function () {
    var self = this;
    var awaiter = new awaiterModel();
    
    self.init = function (params, querys) {
        console.log('initial game');
    };

    self.dispose = function () {
        console.log('dispose game');
    };
};