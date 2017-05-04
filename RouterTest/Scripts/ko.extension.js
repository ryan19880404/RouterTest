ko.bindingHandlers.navigate = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var value = valueAccessor();
        var url = bindingContext.$root.util.generateUrl(parameter)
        $element.attr('href', url);
        $element.unbind("click");
        $element.click(function (event) {
            event.preventDefault();
        });
    }
}