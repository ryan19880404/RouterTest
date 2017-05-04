var routerRegist = function (routerName, useModuleName, defaultUrl, defaultParams, defaultQuerys) {
    if (routerMap[routerName]) {
        console.error('Duplicate router name[' + routerName + ']. please check.');
    }
    routerMap[routerName] = { useModuleName: useModuleName, defaultUrl: defaultUrl, defaultParams: defaultParams, defaultQuerys: defaultQuerys };
};

var routerMap = {};

routerRegist('main', 'main', '/', null, null);
routerRegist('params', 'params', '/:lang/test', null, null);
routerRegist('params1', 'params', '/:lang/test', null, null);