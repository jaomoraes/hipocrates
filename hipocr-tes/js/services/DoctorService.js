(function () {
    'use sctric';
    
    angular.module("AppHipocrates")
        .factory('DoctorService', DoctorService)
        .$inject = ['PeopleService'];

    function DoctorService(PeopleService) {
        var doctor = function (nome, idade, telefone, especialidade) {
            var self = this;
            var _people = PeopleService(nome, idade, telefone); //contructor pai

            self.especialidade = especialidade;

            self.setEspecialidade = function (e) {
                self.especialidade = e;
            };

            self.getEspecialidade = function () {
                return self.especialidade;
            };

            _people.getEspecialidade = self.getEspecialidade;

            return _people;
        };

        return doctor;

    }
})();
