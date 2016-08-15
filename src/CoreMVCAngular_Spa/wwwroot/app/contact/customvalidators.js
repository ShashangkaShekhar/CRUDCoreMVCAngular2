System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var customvalidators;
    return {
        setters:[],
        execute: function() {
            customvalidators = (function () {
                function customvalidators() {
                }
                customvalidators.emailValidator = function (control) {
                    if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return { 'invalidEmailAddress': true };
                    }
                };
                return customvalidators;
            }());
            exports_1("customvalidators", customvalidators);
        }
    }
});
//# sourceMappingURL=customvalidators.js.map