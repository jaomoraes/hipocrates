(function () {
    'use sctrict';
    
    angular.module('AppHipocrates')
        .factory("AuthenticationService", AuthenticationService);

    function AuthenticationService() {
        var login = function (name, password) {
            if (name && password) {
                var n = "pedro",
                    p = 1234;

                if (name === n && password === p) {
                    console.log("login válido");
                } else {
                    console.log("login ou senha incorretos");
                }
            }

        };
        return login;

    }
})();
