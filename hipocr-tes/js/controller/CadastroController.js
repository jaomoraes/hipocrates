(function () {
    'use strict';
    angular.module('AppHipocrates').controller('CadastroController', CadastroController);

    CadastroController.$inject = ['PeopleService','DataUser'];

    function CadastroController(PeopleService,DataUser) {
        var vm = this;
      vm.Pessoa = {};
       
        vm.salvar = function salvar() {
            vm.people = new PeopleService(vm.Pessoa);
            DataUser.push(vm.people);
        };
    }

})();