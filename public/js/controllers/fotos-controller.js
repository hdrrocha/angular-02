//$scpe usado pra ter acesso ao scope do, $http é o responsavel por fazer requisicao ajax
angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    $scope.fotos = [];

    $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (erro) {
            console.log(erro);
        });

    // $http.get('v1/fotos');
    // promise.then(function(retorno) {
    //     $scope.fotos = retorno.data;
    // }).catch(function (error) {
    //     console.log(error);
    // })
});

// {
//     titulo : 'Dog Nerd 0',
//         url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// },
// {
//     titulo : 'Dog Nerd 1',
//         url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// },
// {
//     titulo : 'Dog Nerd 2',
//         url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// },
// {
//     titulo : 'Dog Nerd 3',
//         url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// }
// $scope. foto1 =  {
//     titulo : 'Dog Nerd 1',
//     url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// }
//
// $scope. foto2 =  {
//     titulo : 'Dog Nerd 2',
//     url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// }
//
// $scope. foto3 =  {
//     titulo : 'Dog Nerd 3',
//     url : 'http://www.ligadanasdicas.com/wp-content/uploads/2012/12/wallpaper-de-cachorro-15.jpg'
// }