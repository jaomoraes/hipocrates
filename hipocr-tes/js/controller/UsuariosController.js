(function () {
    'use strict';
    angular.module('AppHipocrates').controller('UsuariosController', UsuariosController);

    UsuariosController.$inject = ['DataUser'];

    function UsuariosController(DataUser) {
        var vm = this;
        vm.data = DataUser;
    }

})();
