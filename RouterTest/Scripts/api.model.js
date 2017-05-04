/// <reference path="blue-bird.js" />

var apiModel = function () {
    var self = this;
    self.parameterArea = new parameterAreaApiModel();
    self.game = new gameApiModel();
    self.member = new memberApiModel();
    self.message = new messageApiModel();
    self.register = new registerApiModel();
    self.singleSignOn = new singleSignOnApiModel();
    self.promotion = new promotionApiModel();
    self.securityQuestion = new securityQuestionApiModel();
    self.securityEmailPhone = new securityEmailPhoneApiModel();
    self.securityForgotPwd = new securityForgotPwdApiModel();
    self.wallet = new walletApiModel();
    self.withdrawPassword = new withdrawPasswordApiModel();
};

var awaiterModel = function () {
    var self = this;

    var promises = [];

    var callbackExecute = function (callback, parameters) {
        if (callback && $.isFunction(callback)) {
            if (parameters !== undefined) {
                callback(parameters);
            }
            else {
                callback();
            }
        }
    };

    self.registPageLoad = function () {
        promises.push(new Promise(function (resolve, reject) {
            $(function () {
                resolve();
            })
        }));
        return self;
    };

    self.regist = function (options, callback) {
        promises.push(new Promise(function (resolve, reject) {
            options = options();
            options['success'] = function (result) {
                resolve(result);
                callbackExecute(callback.success, result);
            };
            options['error'] = function (result) {
                reject(result);
                callbackExecute(callback.fail, result);
            };
            $.ajax(options);
        }));
        return self;
    };

    self.start = function (callback, loadbar) {
        callback = callback || {};
        if (loadbar) {
            callbackExecute(loadbar.event.loading);
        }
        callbackExecute(callback.before);

        Promise.all(promises).then(function (values) {
            promises = [];
            callbackExecute(callback.success, values);
            callbackExecute(callback.complete);
            if (loadbar) {
                callbackExecute(loadbar.event.loaded);
            }
        },
        function (reasons) {
            promises = [];
            callbackExecute(callback.fail, reasons);
            callbackExecute(callback.complete);
            if (loadbar) {
                callbackExecute(loadbar.event.loaded);
            }
        });
    };
};