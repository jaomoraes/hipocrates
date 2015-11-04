(function () {
    'use sctrict';
    
    angular.module("AppHipocrates")
        .factory('PacienteService', PacienteService)
        .$inject = ['PeopleService'];

    function PacienteService(PeopleService) {

        var paciente = function (nome, idade, telefone, convenio) {
            var self = this;
            var p = PeopleService(nome, idade, telefone);

            self.convenio = convenio;

            self.getConvenio = function () {
                return self.convenio;
            };

            p.getConvenio = self.getConvenio;

            return p;
        };

        return paciente;

    }

})();
