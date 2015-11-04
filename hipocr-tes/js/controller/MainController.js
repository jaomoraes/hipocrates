(function () {
    'use strict';
    
    angular.module('AppHipocrates').controller('MainController', MainController);
    
    MainController.$inject = ['PeopleService', 'DoctorService', 'PacienteService'];

    function MainController(PeopleService, DoctorService, PacienteService) {

    }

})();