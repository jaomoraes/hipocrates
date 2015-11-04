(function () {
    'use strict';

    angular.module('AppHipocrates').factory('PeopleService', PeopleService);

    function PeopleService() {

        var People = function (obj) {

            //objeto que recebe os dados atuais de contrução
            var p = {
                nome: obj.nome,
                dateNasc: obj.dateNasc,
                rg: obj.rg,
                cpf: obj.cpf,
                cargo: obj.cargo,
                endereco: obj.endereco,
                numero: obj.numero,
                complemento: obj.complemento,
                bairro: obj.bairro,
                telRes: obj.telRes,
                telCel: obj.telCel,
                user: obj.user,
                password: obj.password,
                cep: obj.cep
            };

            //funcões de encapsulamento para retorno de valores
            function getNome() {
                return p.nome;
            }

            function getDateNasc() {
                return p.dateNasc;
            }

            function getRg() {
                return p.rg;
            }


            function getCpf() {
                return p.cpf;
            }

            function getCargo() {
                return p.cargo;
            }

            function getEndereco() {
                return p.endereco;
            }

            function getNumero() {
                return p.numero;
            }

            function getComplemento() {
                return p.complemento;
            }t

            function getBairro() {
                return p.bairro;
            }

            function getTelRes() {
                return p.telRes;
            }

            function getTelCel() {
                return p.telCel;
            }

            function getUser() {
                return p.user;
            }

            function getPassword() {
                return p.password;
            }

            function getCep() {
                return p.cep;
            }

            return {

                getNome: getNome,
                getDateNasc: getDateNasc,
                getRg: getRg,
                getCpf: getCpf,
                getCargo: getCargo,
                getEndereco: getEndereco,
                getNumero: getNumero,
                getComplemento: getComplemento,
                getBairro: getBairro,
                getTelRes: getTelRes,
                getTelCel: getTelCel,
                getUser: getUser,
                getPassword: getPassword,
                getCep: getCep

            };
        };

        return People;

    }

})();
