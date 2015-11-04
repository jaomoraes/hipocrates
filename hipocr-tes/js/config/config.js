app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/cadastrarUsuarios.html',
        controller:  "CadastrarUsuariosController"
    });
    
     $routeProvider.when('/perfil', {
        templateUrl: 'views/perfil.html'
    });

      $routeProvider.when('/usuarios', {
        templateUrl: 'views/usuarios.html', 
        controller:  'UsuariosController'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);



